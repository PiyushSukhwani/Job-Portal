# HIRRD - Job Portal Web Application

HIRRD is a modern job portal web application that bridges the gap between job seekers and recruiters. Built using cutting-edge technologies, HIRRD simplifies the hiring process by providing a seamless experience for both candidates and recruiters.

## Features

### For Candidates:
- **Account Creation**: Sign up and manage your profile using Clerk authentication.
- **Job Discovery**: Browse through a wide range of job postings.
- **Application Submission**: Apply directly to jobs with ease.

### For Recruiters:
- **Post Jobs**: Create new job postings to attract top talent.
- **Manage Applications**: View and review applications received from candidates.
- **Candidate Selection**: Update hiring status for applicants.
- **Edit and Delete Jobs**: Modify job details or remove postings as needed.

## Tech Stack

- **Frontend**: React.js with Tailwind CSS for styling and ShadCN UI components for enhanced user experience.
- **Authentication**: Clerk for secure and scalable user authentication.
- **Backend**: Supabase for data management and real-time updates.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/hirrd.git
   cd hirrd
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your Clerk and Supabase API keys and configurations:
     ```env
     REACT_APP_CLERK_FRONTEND_API=<your-clerk-frontend-api>
     REACT_APP_SUPABASE_URL=<your-supabase-url>
     REACT_APP_SUPABASE_ANON_KEY=<your-supabase-anon-key>
     ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the application in your browser at `http://localhost:5175`.

## Usage

- **Candidates**:
  1. Sign up or log in using Clerk.
  2. Browse available job postings.
  3. Apply to jobs that match your skills and interests.

- **Recruiters**:
  1. Sign up or log in using Clerk.
  2. Create new job postings.
  3. Review applications, update hiring statuses, and manage job postings.

## Contribution

Contributions are welcome! If you'd like to contribute to HIRRD, please:
1. Fork the repository.
2. Create a new branch for your feature/bugfix.
3. Submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please contact [piyushsukhwani7@gmail.com] or create an issue in the repository.
