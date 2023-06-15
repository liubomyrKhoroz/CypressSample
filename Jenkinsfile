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
                bat "npx cypress run --browser ${BROWSER} --headed --spec ${TESTSUITE} --env URL_AFYA_BRAIN_STAGE=${getOptionName(params.ENVIRONMENT)}"
                echo "Selected option: ${params.ENVIRONMENT}"
                echo "Selected option name: ${getOptionName(params.ENVIRONMENT)}"
              }
            }
        }
  

    post {
        always {
            junit keepLongStdio: true, testResults: 'test-results/*.xml', allowEmptyResults: true
            archiveArtifacts artifacts: 'cypress/videos/**/*.mp4', onlyIfSuccessful: false
            echo "Test Results:${testResults}"
        }
        failure {
             archiveArtifacts artifacts: 'cypress/screenshots/**/*.png', allowEmptyArchive: true
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
def testResults = sh(returnStdout: true, script: 'your-test-command --output-format=json')