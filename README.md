# VistaarTrade

## Setup

Clone this repo and run

```
npm install
```

Create a `.env.local` file and add the following entries (edit them as per the needs):

```.env.local
BACKEND_URL=http://127.0.0.1:8000
AUTH_SECRET=secret
```

## Pages (atleast in the old website)

### Core

| URL | Info |
| --- | ---- |
| `/` | Home |

### Account

| URL                                       | Info            |
| ----------------------------------------- | --------------- |
| `/account/activate-user/<uidb64>/<token>` | Activate User   |
| `/account/buy_leads/`                     | Buy Leads       |
| `/account/dashboard/`                     | Dashboard       |
| `/account/login/`                         | Login           |
| `/account/logout/`                        | Logout          |
| `/account/manage_products/`               | Manage Products |
| `/account/register/`                      | Register        |
| `/account/verify_supplier`                | Verify Supplier |

#### Currently having 500 Server Error in the old production server

| URL                              | Info                  |
| -------------------------------- | --------------------- |
| `/account/bills_and_invoice/`    | Bills and Invoice     |
| `/account/buyer_tools/`          | Buyer Tools           |
| `/account/catalog_view/`         | Catalog View          |
| `/account/collect_payments/`     | Collect Payments      |
| `/account/company_profile/`      | Company Profile       |
| `/account/edit/`                 | Edit Account          |
| `/account/edit_business_profile` | Edit Business Profile |
| `/account/edit_company_info`     | Edit Company Info     |
| `/account/edit_leads/<int:id>/`  | Edit Leads            |
| `/account/lead_manager/`         | Lead Manager          |
| `/account/password_change`       | Password Change       |
| `/account/password_reset/`       | Password Reset        |
| `/account/photos_and_docs/`      | Photos and Docs       |
| `/account/post_requirements/`    | Post Requirements     |
| `/account/settings/`             | Account Settings      |

### Products

| URL                                        | Info                      |
| ------------------------------------------ | ------------------------- |
| `/add-products`                            | Add Products              |
| `/products/<int:id>/<slug:slug>/`          | Product Details           |
| `/products/category/<int:id>/<slug:slug>/` | Category Details / Search |
| `/products/edit_product/<int:id>/`         | Edit Product              |
| `/products/get_best_price/<int:id>`        | Get Best Price            |
| `/products/submit_product`                 | Submit Product            |

### Orders

| URL                          | Info              |
| ---------------------------- | ----------------- |
| `/orders/request-quotation/` | Request Quotation |

### Supplier

| URL                   | Info             |
| --------------------- | ---------------- |
| `/supplier/<int:id>/` | Supplier Details |

### Others

| URL                 | Info                 |
| ------------------- | -------------------- |
| `/terms-conditions` | Terms and Conditions |
| `/privacy-policy`   | Privacy Policy       |
