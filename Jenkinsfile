pipeline {
  agent any

  environment {
    DOCKERHUB_USER = 'nourki2003'
    FRONT_IMG = "${DOCKERHUB_USER}/garderie-frontend"
    BACK_IMG  = "${DOCKERHUB_USER}/garderie-backend"
  }

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Install') {
      steps {
        dir('frontend') {
          script {
            if (isUnix()) { sh 'npm install' } else { bat 'npm install' }
          }
        }
        dir('backend') {
          script {
            if (isUnix()) { sh 'npm install' } else { bat 'npm install' }
          }
        }
      }
    }

    stage('Test') {
      steps {
        dir('frontend') {
          script {
            if (isUnix()) { sh 'npm test' } else { bat 'npm test' }
          }
        }
      }
    }

    stage('Build Frontend') {
      steps {
        script {
          if (isUnix()) {
            sh 'docker build -t $FRONT_IMG:latest -t $FRONT_IMG:$BUILD_NUMBER ./frontend'
          } else {
            bat "docker build -t %FRONT_IMG%:latest -t %FRONT_IMG%:%BUILD_NUMBER% ./frontend"
          }
        }
      }
    }

    stage('Build Backend') {
      steps {
        script {
          if (isUnix()) {
            sh 'docker build -t $BACK_IMG:latest -t $BACK_IMG:$BUILD_NUMBER ./backend'
          } else {
            bat "docker build -t %BACK_IMG%:latest -t %BACK_IMG%:%BUILD_NUMBER% ./backend"
          }
        }
      }
    }

    stage('Push Frontend') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub',
                                          usernameVariable: 'DH_USER',
                                          passwordVariable: 'DH_PASS')]) {
          script {
            if (isUnix()) {
              sh 'echo "$DH_PASS" | docker login -u "$DH_USER" --password-stdin'
              sh 'docker push $FRONT_IMG:latest'
              sh 'docker push $FRONT_IMG:$BUILD_NUMBER'
            } else {
              bat 'echo %DH_PASS% | docker login -u %DH_USER% --password-stdin'
              bat "docker push %FRONT_IMG%:latest"
              bat "docker push %FRONT_IMG%:%BUILD_NUMBER%"
            }
          }
        }
      }
    }

    stage('Push Backend') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub',
                                          usernameVariable: 'DH_USER',
                                          passwordVariable: 'DH_PASS')]) {
          script {
            if (isUnix()) {
              sh 'echo "$DH_PASS" | docker login -u "$DH_USER" --password-stdin'
              sh 'docker push $BACK_IMG:latest'
              sh 'docker push $BACK_IMG:$BUILD_NUMBER'
            } else {
              bat 'echo %DH_PASS% | docker login -u %DH_USER% --password-stdin'
              bat "docker push %BACK_IMG%:latest"
              bat "docker push %BACK_IMG%:%BUILD_NUMBER%"
            }
          }
        }
      }
    }
  }

  post {
    always {
      script {
        if (isUnix()) {
          sh 'docker logout || true'
        } else {
          bat 'docker logout || ver > nul'
        }
      }
    }
  }
}
