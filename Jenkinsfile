pipeline{
    agent any

    parameters{
        choice(name: 'BROWSER', choices: ['chrome','edge','firefox'], description:"Select the browser")
        choice(name: 'Test Scenario', choices:['cypress/e2e/','cypress/e2e/TestVerificationPage','cypress/e2e/TestWelcomePage'], description: "Enter the test scenarios you want to runn")
        
    }

    stages{
        stage('Testing'){
            steps{
            bat "npm i"
            bat "npx cypress run"
            }
        
        }
       
    }

  post {
    always {
      junit keepLongStdio: true, testResults: 'test-results/*.xml', allowEmptyResults: true
      archiveArtifacts artifacts: 'cypress/videos/**/*.mp4', onlyIfSuccessful: false
      rchiveArtifacts artifacts: 'cypress/screenshots/**/*.png', onlyIfSuccessful: false
    }
    }
}
