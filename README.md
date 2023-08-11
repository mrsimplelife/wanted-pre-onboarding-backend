# Wanted Pre-Onboarding Backend Assignment
## 성명
박윤철
## 애플리케이션 실행 방법
프로젝트를 실행하려면 다음 사항들이 필요합니다.
- **[Node.js](https://nodejs.org/)** 설치
- **[Docker](https://www.docker.com/)** 설치 (옵션)
## **설치 및 실행**
아래 단계를 따라 프로젝트를 설치하고 실행하세요.
1. **프로젝트 클론:** 아래 명령어를 터미널에서 실행하여 프로젝트를 클론합니다.
    ```bash
    git clone https://github.com/mrsimplelife/wanted-pre-onboarding-backend.git
    cd wanted-pre-onboarding-backend
    ```
2. **환경 변수 설정:** 프로젝트 루트 디렉토리에 **`.env`** 파일을 생성하고, 다음과 같이 환경 변수를 설정하세요.
    ```
    MYSQL_ROOT_PASSWORD=root_password
    MYSQL_DATABASE=mydb
    SECRET_KEY=secret_key
    ```
3. **Docker Compose로 실행:** Docker Compose를 사용하여 프로젝트를 실행합니다.
    ```bash
    docker compose -f "docker-compose.dev.yaml" up -d --build
    ```
4. **API 서버 실행:** API 서버는 **`http://localhost:3000`**에서 실행됩니다. 브라우저나 API 클라이언트를 통해 접속하여 사용할 수 있습니다.
## **데이터베이스 테이블 구조**
- **users:** 사용자 정보를 저장하는 테이블
    - id (Primary Key)
    - email
    - password (암호화된 비밀번호)
- **posts:** 게시글 정보를 저장하는 테이블
    - id (Primary Key)
    - title
    - content
    - userId (Foreign Key: users 테이블과 연결)
## **구현한 API의 동작을 촬영한 데모 영상 링크**
- **[데모 영상 링크](https://www.youtube.com/watch?v=89N-58ca4QM)**
## **구현 방법 및 이유에 대한 간략한 설명**
이 프로젝트는 Node.js와 Express.js를 사용하여 RESTful API를 구현한 것입니다. Express.js는 빠르고 간편한 웹 프레임워크로, API를 간단히 작성하고 라우팅할 수 있도록 도와줍니다. 데이터베이스는 MySQL을 사용하였고, 사용자 정보와 게시글 정보를 저장하는 데 사용되었습니다.
## **API 명세**
### **1. 사용자 회원가입 엔드포인트**
- **URL:** **`/signup`**
- **Method:** **`POST`**
- **Request Body:**
    ```json
    {
      "email": "user@example.com",
      "password": "securepassword"
    }
    ```
- **Response:**
    ```json
    {
      "message": "User registered successfully"
    }
    ```
### **2. 사용자 로그인 엔드포인트**
- **URL:** **`/login`**
- **Method:** **`POST`**
- **Request Body:**
    ```json
    {
      "email": "user@example.com",
      "password": "securepassword"
    }
    ```
- **Response:**
    ```json
    {
      "token": "your-generated-jwt-token"
    }
    ```
### **3. 새로운 게시글 생성 엔드포인트**
- **URL:** **`/posts`**
- **Method:** **`POST`**
- **Request Body:**
    ```json
    {
      "title": "New Post",
      "content": "This is the content of the new post."
    }
    ```
- **Response:**
    ```json
    {
      "id": 1,
      "title": "New Post",
      "content": "This is the content of the new post."
    }
    ```
### **4. 게시글 목록 조회 엔드포인트**
- **URL:** **`/posts`**
- **Method:** **`GET`**
- **Response:**
    ```json
    {
      "posts": [
        {
          "id": 1,
          "title": "Post 1",
          "content": "Content of post 1"
        },
        {
          "id": 2,
          "title": "Post 2",
          "content": "Content of post 2"
        }
      ]
    }
    ```
### **5. 특정 게시글 조회 엔드포인트**
- **URL:** **`/posts/:id`**
- **Method:** **`GET`**
- **Response:**
    ```json
    {
      "id": 1,
      "title": "Post 1",
      "content": "Content of post 1"
    }
    ```
### **6. 특정 게시글 수정 엔드포인트**
- **URL:** **`/posts/:id`**
- **Method:** **`PUT`**
- **Request Body:**
    ```json
    {
      "title": "Updated Post 1",
      "content": "Updated content of post 1"
    }
    ```
- **Response:**
    ```json
    {
      "id": 1,
      "title": "Updated Post 1",
      "content": "Updated content of post 1"
    }
    ```
### **7. 특정 게시글 삭제 엔드포인트**
- **URL:** **`/posts/:id`**
- **Method:** **`DELETE`**
- **Response:**
    ```json
    {}
    ```
