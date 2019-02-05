#### Instructions for obtaining a Stripe API key.

1. You have to create an account, confirm it via email then log in. [Go to the Stripe site and make an account](https://dashboard.stripe.com/register)


    ![Stripe Register](Stripe_Reg.png)

     *The filled out form above is only for **example**, please provide the appropriaate entries for your organization*

2. Following selecting **Create Your Stripe Account** on the formm shown above, you will be presented with following.

3. Finishing Obtaining the API keys.

    ![Choose_Stripe_API](Choose_Stripe_API.png)

    *   Please select Integrate with Stripes API

    *   Next, you will be presented with the following dashboard

    ![click_stripe_dev_keys](click_stripe_dev_keys.png)

    * Select Developer as shown in the lower left side menu

    ![reveal_dev_api_keys](reveal_dev_api_keys.png)

    * On the above page where you see **"Standard Keys"** in the center of the page:

    * Copy and Paste ==> **Publishable Keys** into your `.env` file, located at the root of your client directory.

      * The line in your respective `.env` file will look like the following below:

    `REACT_APP_STRIPE_API_PUBLISH_KEY`=**'YOUR KEY HERE'**

