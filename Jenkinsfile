pipeline{
    agent any


    stages('Deploying'){
        stage{
        echo "Building the application"
        }
        stage('Testing'){
            steps{
            bat "npm i"
            bat "npx cypress run"
            }
        }
        stage('Deploying'){
            echo "Deploy the application"
        }
    }
    }
