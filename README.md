# CCF website (asuccf.com)

The website for Campus Christian Fellowship at App State.

## Changing photos or text (no tech skills needed)

1. Go to **app.pagescms.org** and sign in with GitHub.
2. Open the **ccf-website** project.
3. Pick what you want to change on the left: Photo gallery, Staff, Home page, Get Involved cards, Student quotes, or Alumni page.
4. Make your change and click **Save**. The live site updates in about a minute.

**Events** are not edited here. They come straight from the CCF Google Calendar (asuccf@gmail.com). Add an event there and it shows on the website's Calendar page.

## Where things live

- Text and photo lists: `src/_data/*.yml`
- Photos: `src/images/`
- Page layouts: `src/*.njk` and `src/_includes/`
- Hosting: Cloudflare Pages (free), building with `npx @11ty/eleventy` into `_site`
- Newsletter sign-up and Contact form send to the CCF Donor Manager
  (ccfappstate20.pythonanywhere.com). Sign-ups go on the newsletter list. Contact
  messages are kept separate under "Website Messages" and never added to the donor list.
- Monthly giving buttons are Stripe Payment Links (in the CCF Stripe account).
