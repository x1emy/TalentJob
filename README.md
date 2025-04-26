# Talentjob - Job Listing Platform

Talentjob is a web platform where users can browse job listings, filter jobs, apply for positions, and manage their applications.

## Features
- Browse job listings
- Filter jobs by category, salary, and type
- Apply for jobs
- Manage job applications

## Technologies
- **Frontend:** Angular (TypeScript)
- **Backend:** Django REST Framework (Python)
- **Database:** PostgreSQL

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Python 3.x](https://www.python.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Angular CLI](https://angular.io/cli) (for managing Angular applications)

## Installation & Setup

1. Clone the Repository

bash
git clone <repository-url>
cd <project-directory>
2. Backend Setup (Django + DRF)

Create & activate a virtual environment:

bash
python3 -m venv venv
source venv/bin/activate      # Linux/macOS
.\venv\Scripts\activate       # Windows
Install dependencies:

bash
pip install -r requirements.txt
Set up the database:

Configure settings.py with your PostgreSQL credentials.
Run migrations:
bash
python manage.py migrate
Create a superuser (admin):

bash
python manage.py createsuperuser
(Use admin / 1202 for default credentials.)

Run the Django development server:

bash
python manage.py runserver
(Backend will be available at http://localhost:8000.)

3. Frontend Setup (Angular)

Navigate to the frontend directory:

bash
cd job-vacancies-app
Install dependencies:

bash
npm install
Run the Angular development server:

bash
ng serve
(Frontend will be available at http://localhost:4200.)

🔌 API Endpoints

Endpoint	Description
api/applications/	Submit & manage applications
admin/	Django admin panel
Default Admin Credentials:

Username: admin
Password: 1202
📜 License

This project is licensed under the MIT License.

📬 Contact : balgymbekova1@gmail.com

For support or contributions, please open an issue or contact the maintainers.

Happy job hunting! 🚀

