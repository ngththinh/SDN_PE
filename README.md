# Post Management System - SDN302 Practical Exam

A modern web application for managing posts with full CRUD operations, built with Next.js 15, MongoDB, and Tailwind CSS.

## Features

✅ **Complete CRUD Operations**
- Create new posts with name, description, and optional image
- View all posts in a responsive grid layout
- Edit existing posts
- Delete posts with confirmation dialog

✅ **Search & Sort Functionality**
- Search posts by name or description
- Sort posts by name or creation date
- Toggle ascending/descending order

✅ **Modern UI/UX**
- Light, clean design with gradient backgrounds
- Responsive layout for all devices
- Toast notifications for user feedback
- Loading states and error handling

✅ **Technical Stack**
- Next.js 15 with App Router
- MongoDB with Mongoose ODM
- Tailwind CSS for styling
- React Hot Toast for notifications
- Lucide React for icons

## Prerequisites

- Node.js 18+ installed
- MongoDB database (local or cloud)
- Git for version control

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd pe_demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure MongoDB**
   - Create a `.env` file in the root directory
   - Add your MongoDB connection string:
   ```env
   MONGODB_URI=mongodb://localhost:27017/pe_demo
   # OR for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pe_demo
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
pe_demo/
├── src/app/
│   ├── api/posts/          # API routes for CRUD operations
│   ├── posts/
│   │   ├── create/         # Create post page
│   │   └── [id]/
│   │       ├── page.js     # View post page
│   │       └── edit/       # Edit post page
│   ├── layout.js           # Root layout
│   ├── page.js             # Home page (post list)
│   └── globals.css         # Global styles
├── models/
│   └── Post.js             # MongoDB Post model
├── lib/
│   └── mongodb.js          # Database connection
└── package.json
```

## API Endpoints

- `GET /api/posts` - Get all posts (with search & sort)
- `POST /api/posts` - Create a new post
- `GET /api/posts/[id]` - Get a specific post
- `PUT /api/posts/[id]` - Update a post
- `DELETE /api/posts/[id]` - Delete a post

## Database Schema

```javascript
{
  name: String (required, max 100 chars),
  description: String (required, max 1000 chars),
  image: String (optional, URL),
  createdAt: Date,
  updatedAt: Date
}
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
- **Netlify**: Use `npm run build` and deploy the `out` folder
- **Railway**: Connect GitHub repo and add environment variables
- **Render**: Use Node.js environment with build command `npm run build`

## Environment Variables

```env
# Required
MONGODB_URI=your_mongodb_connection_string

# Optional (for production)
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## Features Implemented

### 1. Main Page (Post List)
- ✅ Display all posts with name, description, and image
- ✅ Search functionality by name/description
- ✅ Sort by name (A-Z / Z-A)
- ✅ Responsive grid layout

### 2. Create Post
- ✅ Form with name and description (required)
- ✅ Optional image URL input with preview
- ✅ Form validation and character limits
- ✅ Success/error notifications

### 3. Edit Post
- ✅ Pre-populated form with existing data
- ✅ Update name, description, and image
- ✅ Redirect to post view after saving

### 4. Delete Post
- ✅ Delete functionality with confirmation dialog
- ✅ Toast notification on success

### 5. View Post
- ✅ Full post details page
- ✅ Display creation and update dates
- ✅ Action buttons for edit/delete

## Screenshots

*Add screenshots of your working application here*

## Report

This application successfully implements all requirements for the SDN302 Practical Exam:

- **Frontend**: Modern React-based UI with Next.js App Router
- **Backend**: RESTful API with full CRUD operations
- **Database**: MongoDB with proper schema and indexing
- **Features**: Search, sort, image support, responsive design
- **Deployment**: Ready for Vercel, Netlify, or other platforms

## Troubleshooting

**MongoDB Connection Issues:**
- Ensure MongoDB is running (if local)
- Check connection string format
- Verify network access (if using Atlas)

**Build Errors:**
- Run `npm install` to ensure all dependencies are installed
- Check Node.js version compatibility
- Verify environment variables are set

**Styling Issues:**
- Ensure Tailwind CSS is properly configured
- Check for conflicting CSS classes

## License

This project is created for educational purposes as part of SDN302 coursework.
