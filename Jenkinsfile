pipeline{
    agent any

    parameters{
        choice(name: 'BROWSER', choices: ['chrome','edge','firefox'], description:"Select the browser")
        choice(name: 'SPEC', choices:['cypress/e2e/**/**','cypress/e2e/1-getting-started','cypress/e2e/2-advanced-examples'], description: "Enter the test scenarios you want to runn")
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
            archiveArtifacts artifacts: 'cypress/**/*.jar', fingerprint: true
            junit 'cypress/reports/**/*.xml'
        }
    }
}
