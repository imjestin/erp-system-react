# GitHub Pages Deployment Guide

This guide explains how to deploy the ERP System to GitHub Pages.

## 🚀 Quick Deployment

```bash
npm run deploy
```

## 📋 Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- GitHub account
- Repository with GitHub Pages enabled

## 🛠️ Setup Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Install GitHub Pages Deployment Tool

```bash
npm install --save-dev gh-pages
```

### 3. Update package.json

Add the following scripts and homepage to your `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "homepage": "https://yourusername.github.io/your-repo-name"
}
```

**Important**: Replace `yourusername` and `your-repo-name` with your actual GitHub username and repository name.

### 4. Deploy to GitHub Pages

```bash
npm run deploy
```

## 🔧 Manual Deployment Steps

If you prefer to deploy manually:

### 1. Build the Application

```bash
npm run build
```

### 2. Deploy to gh-pages Branch

```bash
npx gh-pages -d build
```

## 📁 Repository Structure After Deployment

```
your-repo/
├── main branch (source code)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
└── gh-pages branch (deployed site)
    ├── index.html
    ├── static/
    └── assets/
```

## 🌐 Access Your Live Site

After successful deployment, your site will be available at:

```
https://yourusername.github.io/your-repo-name
```

## 🔄 Updating Your Deployment

To update your live site after making changes:

1. **Make your changes** to the source code
2. **Commit and push** to the main branch:
   ```bash
   git add .
   git commit -m "Update application"
   git push origin main
   ```
3. **Deploy the changes**:
   ```bash
   npm run deploy
   ```

## ⚙️ GitHub Pages Settings

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Select **gh-pages** branch and **/ (root)** folder
6. Click **Save**

### Custom Domain (Optional)

1. In the **Pages** settings, add your custom domain
2. Update the `homepage` field in `package.json`
3. Redeploy with `npm run deploy`

## 🐛 Troubleshooting

### Common Issues

**Issue**: Site shows 404 error

- **Solution**: Ensure GitHub Pages is enabled and pointing to the `gh-pages` branch

**Issue**: Assets not loading

- **Solution**: Check that the `homepage` field in `package.json` matches your repository URL

**Issue**: Build fails

- **Solution**: Run `npm run build` locally to check for errors before deploying

**Issue**: Changes not reflected

- **Solution**: Wait a few minutes for GitHub Pages to update, or check the Actions tab for deployment status

### Build Optimization

The deployment process automatically:

- ✅ Creates optimized production build
- ✅ Minifies JavaScript and CSS
- ✅ Compresses assets
- ✅ Generates service worker (if configured)

## 📊 Deployment Status

Check deployment status:

- **GitHub Actions**: Go to Actions tab in your repository
- **GitHub Pages**: Go to Settings > Pages to see deployment status
- **Live Site**: Visit your GitHub Pages URL

## 🔐 Security Notes

- GitHub Pages is free for public repositories
- Private repositories require GitHub Pro for Pages
- All source code is public when using GitHub Pages
- Consider using environment variables for sensitive data

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Create React App Deployment](https://create-react-app.dev/docs/deployment/#github-pages)
- [gh-pages Package](https://www.npmjs.com/package/gh-pages)

---

**Live Demo**: https://imjestin.github.io/erp-system-react
