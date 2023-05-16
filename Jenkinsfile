pipeline{
    agent any

    parameters{
        choice(name: 'BROWSER', choices: ['chrome','edge','firefox'], description:"Select the browser")
    }
    stages('Deploying'){
        stage{
        echo "Building the application"
        }
        stage('Testing'){
            steps{
            bat "npm i"
            bat "npx cypress run --browser ${BROWSER}
            }
        }
        stage('Deploying'){
            echo "Deploy the application"
        }
    }
    }
