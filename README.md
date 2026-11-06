# Bikash Kushwaha — AWS Static Portfolio

A responsive personal portfolio built with plain HTML, CSS and JavaScript and hosted on Amazon S3 behind CloudFront. It presents my Cloud, ML and AI work, AWS certifications and experience.

## Tech stack

- HTML, CSS and vanilla JavaScript (no build step)
- Amazon S3 (private bucket) for hosting
- Amazon CloudFront with Origin Access Control (OAC) for HTTPS and caching
- Optional: AWS Certificate Manager, Route 53 and AWS WAF

## Project structure

```
.
├── index.html        # Page content
├── style.css         # Styles and responsive layout
├── script.js         # Small interactions
├── profile-fallback.svg  # Initials avatar shown when the photo is missing
└── assets/               # Not in Git (private): add profile.jpg here before deploying
```

## Run locally

Put your photo at `assets/profile.jpg` (the folder is git-ignored so personal files stay out of the public repo; without it the page shows the initials avatar). Then open `index.html` in a browser, or use the VS Code Live Server extension.

## Deploy to Amazon S3 + CloudFront

1. Create an S3 bucket with a globally unique name and keep **Block all public access** on.
2. Upload the site:

   ```bash
   aws s3 sync . s3://<your-bucket> --exclude ".git/*" --exclude "README.md"
   ```

3. Create a CloudFront distribution with the bucket as the origin and **Origin Access Control (OAC)** enabled, then apply the bucket policy CloudFront suggests.
4. Set the default root object to `index.html`.
5. (Optional) Request a certificate in ACM (us-east-1), add your domain as an alternate domain name and point it at CloudFront with a Route 53 alias record.
6. (Optional) Attach AWS WAF to the distribution.
7. After each update, invalidate the cache:

   ```bash
   aws cloudfront create-invalidation --distribution-id <id> --paths "/*"
   ```

## Architecture

```
Browser ──HTTPS──▶ CloudFront (OAC, cache, optional WAF) ──▶ S3 bucket (private)
```
