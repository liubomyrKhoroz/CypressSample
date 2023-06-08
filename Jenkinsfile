pipeline{
    agent any

    parameters{
        choice(name: 'BROWSER', choices: ['chrome','edge','firefox'], description:"Select the browser")
        choice(name: 'TESTSUITE', choices:['cypress/e2e/','cypress/e2e/TestVerificationPage/','cypress/e2e/TestWelcomePage/'], description: "Enter the test scenarios you want to runn")
        choice(name: 'ENVIRONMENT', choices:['https://patient.staging.advinow.ai/PatientApp/business=754', 'https://patient.staging.advinow.ai/PatientApp/business=750', 'https://patient.staging.advinow.ai/PatientApp/business=749','https://patient.staging.advinow.ai/PatientApp/business=757','https://patient.staging.advinow.ai/PatientApp/business=301'], description:"Select needed environment")
    }

    stages{
        stage('Testing'){
            steps{
            bat "npm i"
            bat "npx cypress run --browser ${BROWSER} --spec ${TESTSUITE} --url ${ENVIRONMENT}"
            }
        }
       
    }

  post {
    always {
      junit keepLongStdio: true, testResults: 'test-results/*.xml', allowEmptyResults: true
      archiveArtifacts artifacts: 'cypress/videos/**/*.mp4', onlyIfSuccessful: false
      archiveArtifacts artifacts: 'cypress/screenshots/**/*.png', onlyIfSuccessful: false
    }
    }
}
