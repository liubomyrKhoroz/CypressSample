pipeline {
  agent any

  parameters {
    choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "Select the browser")
    choice(name: 'TESTSUITE', choices: ['cypress/e2e/', 'cypress/e2e/TestVerificationPage/', 'cypress/e2e/TestWelcomePage/', 'cypress/e2e/TestDemographicsPage/', 'cypress/e2e/TestIdentificationPage/'], description: "Enter the test scenarios you want to run")
    choice(
      choices: getDropdownChoices(),
      description: 'Select environment for test run',
      name: 'ENVIRONMENT'
    )
  }

  stages {
    stage('Testing') {
      steps {
        script {
          // Install necessary dependencies
          bat "npm install"

          // Run Cypress tests and generate mochawesome report
          bat "npx cypress run --browser %BROWSER% --headed --spec %TESTSUITE% --env =${getOptionName(params.ENVIRONMENT)}"
          }
      }
    }
  }

  post {
    always {
      // Archive and publish reports
      archiveArtifacts: 'cypress/reports/index.html', onlyIfSuccessful: false
     }

    failure {
      // Archive screenshots on failure
      archiveArtifacts artifacts: 'cypress/screenshots/**/*.png', allowEmptyArchive: true
    }
  }
}

def getDropdownChoices() {
  def options = ['MoreMD staging', 'Afya Sasa Cardiac staging', 'Sonospine staging', 'Advinow staging', 'Barrow staging', 'Afya Sasa Brain staging']
  def optionNames = ['MoreMD staging': 'https://patient.staging.advinow.ai/PatientApp/business=754', 'Afya Sasa Cardiac staging': 'https://patient.staging.advinow.ai/PatientApp/business=750', 'Sonospine staging': 'https://patient.staging.advinow.ai/PatientApp/business=749', 'Advinow staging': 'https://patient.staging.advinow.ai/PatientApp/business=301', 'Barrow staging': 'https://patient.staging.advinow.ai/PatientApp/business=684', 'Afya Sasa Brain staging': 'https://patient.staging.advinow.ai/PatientApp/business=757']
  return options
}

def getOptionName(selectedOption) {
  def optionNames = ['MoreMD staging': 'https://patient.staging.advinow.ai/PatientApp/business=754', 'Afya Sasa Cardiac staging': 'https://patient.staging.advinow.ai/PatientApp/business=750', 'Sonospine staging': 'https://patient.staging.advinow.ai/PatientApp/business=749', 'Advinow staging': 'https://patient.staging.advinow.ai/PatientApp/business=301', 'Barrow staging': 'https://patient.staging.advinow.ai/PatientApp/business=684', 'Afya Sasa Brain staging': 'https://patient.staging.advinow.ai/PatientApp/business=757']
  return optionNames[selectedOption]
}
