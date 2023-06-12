pipeline {
    agent any

    parameters {
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "Select the browser")
        choice(name: 'TESTSUITE', choices: ['cypress/e2e/', 'cypress/e2e/TestVerificationPage/', 'cypress/e2e/TestWelcomePage/'], description: "Enter the test scenarios you want to run")
        
        //choice(name: 'ENVIRONMENT', choices: ['https://patient.staging.advinow.ai/PatientApp/business=754', 'https://patient.staging.advinow.ai/PatientApp/business=750', 'https://patient.staging.advinow.ai/PatientApp/business=749', 'https://patient.staging.advinow.ai/PatientApp/business=757', 'https://patient.staging.advinow.ai/PatientApp/business=301'], description: "Select the desired environment")
         choice(
            choices: getDropdownChoices(),
            description: 'Select an option',
            name: 'OPTION'
        )
 
    }

    stages {
        stage('Testing') {
            steps {
              script{
                    def selectedOption = params.OPTION
                    def selectedOptionName = getOptionName(selectedOption)
              }
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --headed --spec ${TESTSUITE} --env URL_MOREMD_STAGE=${params.NAME}"
                echo "Selected option: ${params.OPTION}"
                echo "Selected option name: ${getOptionName(params.OPTION)}"
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

// Define the function to get the dropdown choices
def getDropdownChoices() {
    // Define the options and their corresponding names
    def options = ['https://patient.staging.advinow.ai/PatientApp/business=754', 'Option 2', 'Option 3', 'Option 4']
    def optionNames = ['https://patient.staging.advinow.ai/PatientApp/business=754': 'Name 1', 'Option 2': 'Name 2', 'Option 3': 'Name 3', 'Option 4': 'Name 4']
    
    // Return the list of options
    return options
}

// Define the function to get the option name based on the selected value
def getOptionName(selectedOption) {
    // Retrieve the option names mapping
    def optionNames = ['https://patient.staging.advinow.ai/PatientApp/business=754': 'Name 1', 'Option 2': 'Name 2', 'Option 3': 'Name 3', 'Option 4': 'Name 4']
    
    // Return the name corresponding to the selected option
    return optionNames[selectedOption]
}
