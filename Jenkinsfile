pipeline{
    agent any

    parameters{
        choice(name: 'BROWSER', choices: ['chrome','edge','firefox'], description:"Select the browser")
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", choices['cypress/e2e/1-getting-started','cypress\e2e\2-advanced-examples'], description: "Enter the test scenarios you want to run")
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
