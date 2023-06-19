pipeline {
    agent any

    parameters {
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "Select the browser")
        choice(name: 'TESTSUITE', choices: ['cypress/e2e/', 'cypress/e2e/TestVerificationPage/', 'cypress/e2e/TestWelcomePage/','cypress/e2e/TestDemographicsPage/','cypress/e2e/TestIdentificationPage/'], description: "Enter the test scenarios you want to run")
         choice(
            choices: getDropdownChoices(),
            description: 'Select environment for test run',
            name: 'ENVIRONMENT'
        )
 
    }

    stages {
        stage('Testing') {
            steps {
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --headed --spec ${TESTSUITE} --env URL_SONOSPINE_STAGE=${getOptionName(params.ENVIRONMENT)}"
                echo "Selected option: ${params.ENVIRONMENT}"
                echo "Selected option name: ${getOptionName(params.ENVIRONMENT)}"
              }
            }
 
        }
  

post {
    always {
        junit testResults: '**/cypress/reports/*.xml'
        archiveArtifacts artifacts: 'cypress/videos/**/*.mp4', onlyIfSuccessful: false
    }
    failure {
        archiveArtifacts artifacts: 'cypress/screenshots/**/*.png', allowEmptyArchive: true
    }
    success {
        script {
            dir('cypress/reports/mochawesome') {
                // Create the directory if it doesn't exist
                bat 'if not exist . mkdir .'
            }
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'cypress/reports/mochawesome',
                reportFiles: 'index.html',
                reportName: 'Cypress HTML Report'
            ])
        }
    }
}




}

def getDropdownChoices() {

    def options = ['MoreMD staging', 'Afya Sasa Cardiac staging', 'Sonospine staging', 'Advinow staging', 'Barrow staging','Afya Sasa Brain staging']
    def optionNames = ['MoreMD staging': 'https://patient.staging.advinow.ai/PatientApp/business=754', 'Afya Sasa Cardiac staging': 'https://patient.staging.advinow.ai/PatientApp/business=750', 'Sonospine staging': 'https://patient.staging.advinow.ai/PatientApp/business=749', 'Advinow staging': 'https://patient.staging.advinow.ai/PatientApp/business=301', 'Barrow staging':'https://patient.staging.advinow.ai/PatientApp/business=684','Afya Sasa Brain staging':'https://patient.staging.advinow.ai/PatientApp/business=757']
    return options
}

def getOptionName(selectedOption) {
    def optionNames = ['MoreMD staging': 'https://patient.staging.advinow.ai/PatientApp/business=754', 'Afya Sasa Cardiac staging': 'https://patient.staging.advinow.ai/PatientApp/business=750', 'Sonospine staging': 'https://patient.staging.advinow.ai/PatientApp/business=749', 'Advinow staging': 'https://patient.staging.advinow.ai/PatientApp/business=301', 'Barrow staging':'https://patient.staging.advinow.ai/PatientApp/business=684', 'Afya Sasa Brain staging':'https://patient.staging.advinow.ai/PatientApp/business=757']
    return optionNames[selectedOption]
}