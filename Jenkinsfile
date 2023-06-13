pipeline {
    agent any

    parameters {
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "Select the browser")
        choice(name: 'TESTSUITE', choices: ['cypress/e2e/', 'cypress/e2e/TestVerificationPage/', 'cypress/e2e/TestWelcomePage/'], description: "Enter the test scenarios you want to run")
         choice(
            choices: getDropdownChoices(),
            description: 'Select an option',
            name: 'ENVIRONMENT'
        )
 
    }

    stages {
        stage('Testing') {
            steps {
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --headed --spec ${TESTSUITE} --env URL_MOREMD_STAGE=${getOptionName(params.ENVIRONMENT)}"
                echo "Selected option: ${params.ENVIRONMENT}"
                echo "Selected option name: ${getOptionName(params.ENVIRONMENT)}"
              }
            }
        }
  

    post {
        always {
            junit keepLongStdio: true, testResults: 'test-results/*.xml', allowEmptyResults: true
            archiveArtifacts artifacts: 'cypress/videos/**/*.mp4', onlyIfSuccessful: false
        }
        failure {
             archiveArtifacts artifacts: 'cypress/screenshots/**/*.png', allowEmptyArchive: true
        }
    }
}

def getDropdownChoices() {

    def options = ['MoreMD staging', 'Afya Sasa Cardiac staging', 'Option 3', 'Option 4']
    def optionNames = ['MoreMD staging': 'https://patient.staging.advinow.ai/PatientApp/business=754', 'Afya Sasa Cardiac staging': 'https://patient.staging.advinow.ai/PatientApp/business=750', 'Option 3': 'Name 3', 'Option 4': 'Name 4']
    return options
}

def getOptionName(selectedOption) {
    def optionNames = ['MoreMD staging': 'https://patient.staging.advinow.ai/PatientApp/business=754', 'Afya Sasa Cardiac staging': 'https://patient.staging.advinow.ai/PatientApp/business=750', 'Option 3': 'Name 3', 'Option 4': 'Name 4']
    return optionNames[selectedOption]
}