// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract subsidyBackend {
    uint256 public centralGovSchemes = 100000000;
    uint256 public totalBeneficiaries = 0;
    uint256 public FinalId = 0;
    uint256 public constant FIXED_SUBSIDY = 1000;
    uint256 public constant SUBSIDY_INTERVAL = 30 days;

    mapping(uint256 => uint256) public distributedFunds;
    mapping(uint256 => uint256) public distributorWeight;
    mapping(uint256 => uint256[]) public distributorToBeneficiary;
    mapping(uint256 => bool) public beneficiary;
    mapping(uint256 => bool) public beneficiaryPresence;
    mapping(uint256 => uint256) public offlineSubsidyPending; // beneficiaryAdhaar => pendingAmount
    mapping(uint256 => bool) public isRegistered; //to track whether a beneficiary is already registered.
    mapping(uint256 => uint256) public lastClaimTime; // to store the last subsidy claim timestamp per beneficiary

    event FundsDistributed(uint256 distributorId, uint256 amount);
    // When a beneficiary is added, their distributor immediately receives funds.
    function AddBeneficiary(uint256 distributorId,uint256 beneficiaryAdhaar,bool presentOnline) public {
        require(centralGovSchemes >= FIXED_SUBSIDY, "Not enough central funds left");
        require(!isRegistered[beneficiaryAdhaar], "Beneficiary already registered");
        // Update mappings
        distributorWeight[distributorId] += 1;
        distributorToBeneficiary[distributorId].push(beneficiaryAdhaar);
        totalBeneficiaries += 1;
        beneficiaryPresence[beneficiaryAdhaar] = presentOnline;
        isRegistered[beneficiaryAdhaar] = true;

        // Allocate funds directly to distributor
        distributedFunds[distributorId] += FIXED_SUBSIDY;
        centralGovSchemes -= FIXED_SUBSIDY;
        FinalId += 1;
        emit FundsDistributed(distributorId, FIXED_SUBSIDY);
    }

    // Get a list of beneficiaries for a distributor
    function getBeneficiaries(uint256 distributorId) public view returns (uint256[] memory) {
        return distributorToBeneficiary[distributorId];
    }
    // Get if a beneficiary has online presence
    function getBeneficiaryPresence(uint256 beneficiaryAdhaar) public view returns (bool) {
        return beneficiaryPresence[beneficiaryAdhaar];
    }

    // Total remaining funds
    function getRemainingCentralFunds() public view returns (uint256) {
        return centralGovSchemes;
    }

    // Called when distributor sends subsidy to one of their beneficiaries
    function distributorFunds(uint256 distributorId,uint256 associatedBeneficiary) public {
        require(distributedFunds[distributorId] >= FIXED_SUBSIDY, "Insufficient distributor balance");
        require(isRegistered[associatedBeneficiary], "Beneficiary not registered");
        require(
        block.timestamp - lastClaimTime[associatedBeneficiary] >= SUBSIDY_INTERVAL,
        "Subsidy already claimed recently"
    );
        distributedFunds[distributorId] -= FIXED_SUBSIDY;
        lastClaimTime[associatedBeneficiary] = block.timestamp;
        if (beneficiaryPresence[associatedBeneficiary]) {
            beneficiary[associatedBeneficiary] = true;
        } else {
            // Offline handling logic can go here
            // Offline beneficiary: log it for manual processing
            offlineSubsidyPending[associatedBeneficiary] += FIXED_SUBSIDY;
        }
    }
}
