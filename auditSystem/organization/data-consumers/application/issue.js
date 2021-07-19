/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
*/

/*
 * This application has 6 basic steps:
 * 1. Select an identity from a wallet
 * 2. Connect to network gateway
 * 3. Access PaperNet network
 * 4. Construct request to issue commercial paper
 * 5. Submit transaction
 * 6. Process response
 */

'use strict';

// Bring key classes into scope, most importantly Fabric SDK network class
const fs = require('fs');
const yaml = require('js-yaml');
const { Wallets, Gateway } = require('fabric-network');


// Main program function
async function main() {

    // A wallet stores a collection of identities for use
    const wallet = await Wallets.newFileSystemWallet('../identity/user/isabella/wallet');

    // A gateway defines the peers used to access Fabric networks
    const gateway = new Gateway();

    // Main try/catch block
    try {

        // Specify userName for network access
        // const userName = 'isabella.issuer@magnetocorp.com';
        const userName = 'isabella';

        // Load connection profile; will be used to locate a gateway
        let connectionProfile = yaml.safeLoad(fs.readFileSync('../gateway/connection-org2.yaml', 'utf8'));

        // Set connection options; identity and wallet
        let connectionOptions = {
            identity: userName,
            wallet: wallet,
            discovery: { enabled:true, asLocalhost: true }
        };

        // Connect to gateway using application specified parameters
        console.log('Connect to Fabric gateway.');

        await gateway.connect(connectionProfile, connectionOptions);

        // Access PaperNet network
        console.log('Use network channel: mychannel.');

        const network = await gateway.getNetwork('mychannel');

        // Get addressability to commercial paper contract
        console.log('Use org.papernet.commercialpaper smart contract.');

        const contract = await network.getContract('papercontract');

        // issue commercial paper
        console.log('Submit commercial paper issue transaction.');

        let issueResponse = await contract.submitTransaction("recordUpdate","recordId:00001","patientId:Alice","userId:USC","transactionId:00001","geneId:BRCA1","actionType:view","time:20200101");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00002","patientId:Alice","userId:USC","transactionId:00002","geneId:BRCA2","actionType:view","time:20200101");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00003","patientId:Alice","userId:USC","transactionId:00002","geneId:APOB","actionType:view","time:20200101");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00004","patientId:Alice","userId:USC","transactionId:00002","geneId:APOE","actionType:view","time:20200101");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00005","patientId:Bob","userId:USC","transactionId:00002","geneId:BRCA1","actionType:view","time:20200202");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00006","patientId:Bob","userId:USC","transactionId:00002","geneId:BRCA2","actionType:view","time:20200202");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00007","patientId:Bob","userId:USC","transactionId:00002","geneId:APOB","actionType:view","time:20200202");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00008","patientId:Bob","userId:USC","transactionId:00002","geneId:APOE","actionType:view","time:20200202");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00009","patientId:Carol","userId:USC","transactionId:00002","geneId:BRCA1","actionType:view","time:20200202");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00010","patientId:Carol","userId:USC","transactionId:00002","geneId:BRCA2","actionType:view","time:202000303");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00011","patientId:Carol","userId:Kaiser Permanente","transactionId:00002","geneId:APOB","actionType:view","time:202000303");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00012","patientId:Carol","userId:Kaiser Permanente","transactionId:00002","geneId:APOE","actionType:view","time:202000303");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00013","patientId:David","userId:Kaiser Permanente","transactionId:00002","geneId:BRCA1","actionType:view","time:202000303");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00014","patientId:David","userId:Kaiser Permanente","transactionId:00002","geneId:BRCA2","actionType:view","time:202000303");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00015","patientId:David","userId:Kaiser Permanente","transactionId:00002","geneId:APOB","actionType:view","time:202000404");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00016","patientId:David","userId:Kaiser Permanente","transactionId:00002","geneId:APOE","actionType:view","time:202000404");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00017","patientId:Ellis","userId:Kaiser Permanente","transactionId:00002","geneId:BRCA1","actionType:view","time:202000404");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00018","patientId:Ellis","userId:Kaiser Permanente","transactionId:00002","geneId:BRCA2","actionType:view","time:202000404");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00019","patientId:Ellis","userId:Kaiser Permanente","transactionId:00002","geneId:APOB","actionType:view","time:202000404");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00020","patientId:Ellis","userId:Kaiser Permanente","transactionId:00002","geneId:APOE","actionType:view","time:20200505");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00021","patientId:Frank","userId:Kaiser Permanente","transactionId:00002","geneId:BRCA1","actionType:view","time:20200505");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00022","patientId:Frank","userId:23andme ","transactionId:00002","geneId:BRCA2","actionType:view","time:20200505");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00023","patientId:Frank","userId:23andme ","transactionId:00002","geneId:APOB","actionType:view","time:20200505");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00024","patientId:Frank","userId:23andme ","transactionId:00002","geneId:APOE","actionType:view","time:20200505");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00025","patientId:George","userId:23andme ","transactionId:00002","geneId:BRCA1","actionType:view","time:20200606");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00026","patientId:George","userId:23andme ","transactionId:00002","geneId:BRCA2","actionType:view","time:20200606");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00027","patientId:George","userId:23andme ","transactionId:00002","geneId:APOB","actionType:view","time:20200606");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00028","patientId:George","userId:23andme ","transactionId:00002","geneId:APOE","actionType:view","time:20200606");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00029","patientId:Hellen","userId:23andme ","transactionId:00002","geneId:BRCA2","actionType:view","time:20200606");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00030","patientId:Hellen","userId:23andme ","transactionId:00002","geneId:BRCA1","actionType:view","time:20200707");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00031","patientId:Hellen","userId:23andme ","transactionId:00002","geneId:APOB","actionType:view","time:20200707");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00032","patientId:Hellen","userId:23andme ","transactionId:00002","geneId:APOE","actionType:view","time:20200707");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00033","patientId:Irene","userId:USC","transactionId:00002","geneId:BRCA2","actionType:view","time:20200707");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00034","patientId:Irene","userId:USC","transactionId:00002","geneId:BRCA1","actionType:view","time:20200707");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00035","patientId:Irene","userId:USC","transactionId:00002","geneId:APOB","actionType:view","time:20200101");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00036","patientId:Irene","userId:USC","transactionId:00002","geneId:APOE","actionType:view","time:20200101");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00037","patientId:James","userId:23andme ","transactionId:00002","geneId:BRCA2","actionType:view","time:20200101");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00038","patientId:James","userId:23andme ","transactionId:00002","geneId:BRCA1","actionType:view","time:20200101");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00039","patientId:James","userId:23andme ","transactionId:00002","geneId:APOB","actionType:view","time:20200101");
        issueResponse = await contract.submitTransaction("recordUpdate","recordId:00040","patientId:James","userId:23andme ","transactionId:00002","geneId:APOE","actionType:view","time:20200101");
    


        // process response
        console.log('Process issue transaction response.'+issueResponse);

    } catch (error) {

        console.log(`Error processing transaction. ${error}`);
        console.log(error.stack);

    } finally {

        // Disconnect from the gateway
        console.log('Disconnect from Fabric gateway.');
        gateway.disconnect();

    }
}
main().then(() => {

    console.log('Issue program complete.');

}).catch((e) => {

    console.log('Issue program exception.');
    console.log(e);
    console.log(e.stack);
    process.exit(-1);

});
