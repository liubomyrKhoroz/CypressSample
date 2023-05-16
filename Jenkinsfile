pipeline{
    agent any

    parameters{
        choice(name: 'BROWSER', choices: ['chrome','edge','firefox'], description:"Select the browser")
    }
    stages{
        stage('Testing'){
            steps{
            bat "npm i"
            bat "npx cypress run --browser ${BROWSER}"
            }
        }
        stage('Deploying'){
            echo "Deploy the application"
        }
    }
    }
