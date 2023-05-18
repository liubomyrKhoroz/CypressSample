pipeline{
    agent any

    parameters{
        choice(name: 'BROWSER', choices: ['chrome','edge','firefox'], description:"Select the browser")
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "Enter the test scenarios you want to run")
    }
    stages{
        stage('Testing'){
            steps{
            bat "npm i"
            bat "npx cypress run"
            }
        }
    }
}
