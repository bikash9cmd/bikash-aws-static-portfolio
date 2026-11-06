# Bikash Kushwaha — AWS Static Portfolio

This is a responsive static portfolio built with:
- HTML
- CSS
- Vanilla JavaScript
- A local profile image

## Run locally
Open `index.html` directly in a browser, or use VS Code Live Server.

## Deploy to Amazon S3 + CloudFront
1. Create an S3 bucket with a globally unique name.
2. Upload `index.html`, `style.css`, `script.js`, and the `assets/` folder.
3. For a production setup, keep the S3 bucket private and use CloudFront Origin Access Control (OAC).
4. Create a CloudFront distribution with the S3 bucket as the origin.
5. Configure the default root object as `index.html`.
6. If you own a domain, use AWS Certificate Manager (ACM) for HTTPS and Route 53 for DNS.
7. Optionally add AWS WAF in front of CloudFront.
8. After updates, invalidate the CloudFront cache when necessary.

## Before publishing
- Verify the LinkedIn/GitHub URLs.
- Replace any project GitHub links with the actual repository URLs if you want project buttons.
- Keep the certification wording accurate and only add certificate IDs/dates you can verify.

## Portfolio positioning
The site is intentionally positioned around Cloud + Full-Stack + AI, with AWS/Terraform as the strongest visual theme. It highlights the projects and experience contained in the supplied CV and adds AWS Certified AI Practitioner as requested.

## License

Released under the [MIT License](LICENSE).
