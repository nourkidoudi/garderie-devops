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
        dir('frontend') { sh 'npm install' }
        dir('backend')  { sh 'npm install' }
      }
    }

    stage('Test') {
      steps {
        dir('frontend') { sh 'npm test' }
      }
    }

    stage('Build Frontend') {
      steps {
        sh 'docker build -t $FRONT_IMG:latest -t $FRONT_IMG:$BUILD_NUMBER ./frontend'
      }
    }

    stage('Build Backend') {
      steps {
        sh 'docker build -t $BACK_IMG:latest -t $BACK_IMG:$BUILD_NUMBER ./backend'
      }
    }

    stage('Push Frontend') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds',
                                          usernameVariable: 'DH_USER',
                                          passwordVariable: 'DH_PASS')]) {
          sh 'echo "$DH_PASS" | docker login -u "$DH_USER" --password-stdin'
          sh 'docker push $FRONT_IMG:latest'
          sh 'docker push $FRONT_IMG:$BUILD_NUMBER'
        }
      }
    }

    stage('Push Backend') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds',
                                          usernameVariable: 'DH_USER',
                                          passwordVariable: 'DH_PASS')]) {
          sh 'echo "$DH_PASS" | docker login -u "$DH_USER" --password-stdin'
          sh 'docker push $BACK_IMG:latest'
          sh 'docker push $BACK_IMG:$BUILD_NUMBER'
        }
      }
    }
  }

  post {
    always { sh 'docker logout || true' }
  }
}
