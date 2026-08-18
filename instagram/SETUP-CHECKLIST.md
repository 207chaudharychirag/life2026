# Setup Checklist

Split by who does what. Your items need a human identity or a payment method;
mine don't.

---

## YOU — Week 1 (about 2 hours total)

### Account
- [ ] Create the Instagram account (handle options in `BRAND.md`)
- [ ] Switch to **Business** account (not Creator — Business is required for the
      Content Publishing API)
- [ ] Create a Facebook Page and **link it** — hard requirement for API posting
- [ ] Set bio, profile photo, and the link-in-bio destination
- [ ] Turn on the **AI Creator label** on the profile

### Meta developer access — start this immediately, review takes weeks
- [ ] Create a Meta app at developers.facebook.com
- [ ] Add the Instagram Graph API product
- [ ] Request `instagram_content_publish` + `instagram_basic` permissions
- [ ] Submit for App Review — expect several weeks
- [ ] Generate a long-lived access token once approved

> Until approval lands, post manually. Do not let this block launch.
> Manual posting for 6 weeks is completely fine.

### Money plumbing
- [ ] Apply to 3 affiliate programs max (see `STRATEGY.md` shortlist).
      beehiiv and Kit are the easiest approvals with no follower minimum.
- [ ] Set up an email capture — beehiiv or Kit (also the thing you'll promote)
- [ ] Link-in-bio page — a simple hosted page, not Linktree, so you own the data
- [ ] ABN if the service revenue becomes real (not needed day 1)

---

## ME — on your go-ahead

- [ ] Visual template system — carousel layouts, colour tokens, type scale
- [ ] Generate the first 20 posts' visuals
- [ ] Write all 30 captions in your voice
- [ ] Build the link-in-bio landing page
- [ ] Write the Graph API posting script (container → publish flow)
- [ ] Build the metrics tracker — saves, shares, CTR, DM volume
- [ ] Draft the service offer page and DM response templates
- [ ] Weekly performance review + next-batch recommendations

---

## Technical Notes (for when API access lands)

**Publishing flow** is two calls:
```
POST /{ig-user-id}/media          → returns creation_id
POST /{ig-user-id}/media_publish  → publishes it
```

**Limits and formats:**
- 100 API-published posts per rolling 24h per account
- Reels: 5–90 seconds, 9:16, to be eligible for the Reels tab
- Anything outside that range posts as a regular video, not a Reel
- Carousels: `media_type=CAROUSEL`, children uploaded first
- Stories: `media_type=STORIES`

**Requirements recap:** Business/Creator account + linked Facebook Page +
Meta app + approved content-publishing permission + long-lived token.

---

## Launch Gate

Do not post until all of these are true:

- [ ] 10 posts fully produced and sitting in the queue
- [ ] Bio, link, and landing page live
- [ ] At least 1 affiliate program approved
- [ ] You can articulate the positioning in one sentence without reading it

Launching with 10 in the bank is what prevents the week-3 collapse that kills
most accounts.
