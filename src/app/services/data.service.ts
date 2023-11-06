import { Injectable } from '@angular/core';
import { Faq } from '../interfaces/faq';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  anchorFAQ: Faq[] = [
    {
      "id":1,
      "category": "General",
      "question": "Can a person have two emails",
      "answer": "For one person only 1 email will be allowed.",
    },
    {
      "id":2,
      "category": "General",
      "question": "How do i change my password?",
      "answer": "Click on forgot password. Enter your email. Check email for new code. Type new password to allow you to change your password.",
    },
    {
      "id":3,
      "category": "General",
      "question": "How do I email chat support?",
      "answer": "You can email us at customercare@solv.com.gh",
    },
    {
      "id":4,
      "category": "General",
      "question": "Can a person have two emails",
      "answer": "For one person only 1 email will be allowed.",
    },
    {
      "id": 5,
      "category": "Invoices",
      "question": "Can I change my Account Number?",
      "answer": "Account Numbers cannot be changed once they are set, so choose wisely.",
    },
    {
      "id": 6,
      "category": "Invoices",
      "question": "How can I cancel my subscription?",
      "answer": "You can cancel your subscription by going to your account settings and selecting the cancellation option.",
    },
    {
      "id": 7,
      "category": "General",
      "question": "Do you have a mobile app?",
      "answer": "Yes, we have a mobile app available for both Android and iOS devices.",
    },
    {
      "id": 8,
      "category": "Registration",
      "question": "How do I change my email address?",
      "answer": "You can update your email address in your account settings.",
    },
    {
      "id": 9,
      "category": "General",
      "question": "How is my data protected?",
      "answer": "We use strong encryption and follow best security practices to protect your data.",
    },
    {
      "id": 10,
      "category": "General",
      "question": "How can I contact customer support?",
      "answer": "You can contact our customer support team through the 'Contact Us' page on our website.",
    },
    {
      "id": 11,
      "category": "Invoices",
      "question": "Can I have multiple bank accounts accounts?",
      "answer": "No, our terms of service allow only one account per user.",
    },
    {
      "id": 12,
      "category": "Invoices",
      "question": "How can I view my billing records?",
      "answer": "You can update your billing records in your account settings.",
    },
    {
      "id": 13,
      "category": "Registration",
      "question": "What are the registration requirements?",
      "answer": "Please refer to our website's registration requirements page for detailed information.",
    },
    {
      "id": 14,
      "category": "Registration",
      "question": "How do I recover a deactivated account?",
      "answer": "To recover a deactivated account, please contact our support team for assistance.",
    },
    {
      "id": 15,
      "category": "Registration",
      "question": "Is my personal information shared with third parties?",
      "answer": "We do not share your personal information with third parties. Please review our privacy policy for details.",
    },
    {
      "id": 16,
      "category": "General",
      "question": "Is this service free to use?",
      "answer": "Yes, our basic service is free, but we also offer premium features with a subscription.",
    },
    {
      "id": 17,
      "category": "Registration",
      "question": "How can I enable two-factor authentication?",
      "answer": "You can enable two-factor authentication in your account settings for added security.",
    },
    {
      "id": 18,
      "category": "General",
      "question": "Are there any job openings at your company?",
      "answer": "Please check our 'Careers' page for current job openings and opportunities to join our team.",
    },
    {
      "id": 19,
      "category": "Invoices",
      "question": "How do I update my payment information?",
      "answer": "You can update your payment information in your account settings.",
    },
    {
      "id": 20,
      "category": "Registration",
      "question": "How can I change my mobile number?",
      "answer": "You can update your mobile number by going to your account settings and choosing a new image.",
    },
    {
      "id": 21,
      "category": "General",
      "question": "How long is the turn around time from request to payment of a loan",
      "answer": "This website provides information and services on various topics.",
    },
    {
      "id": 22,
      "category": "Registration",
      "question": "How can I reset my password?",
      "answer": "You can reset your password by clicking on the 'Forgot Password' link on the login page.",
    },
  ]

dealerFAQ: Faq[] = [
    {
      "id": 1,
      "category": "Registration",
      "question": "How do I create an account?",
      "answer": "To create an account, click on the 'Sign Up' button, fill in the required information, and follow the on-screen instructions."
    },
    {
      "id": 2,
      "category": "Registration",
      "question": "Can I have multiple accounts?",
      "answer": "Our policy allows only one account per user. Multiple accounts are not permitted."
    },
    {
      "id": 3,
      "category": "General",
      "question": "How can I adjust my privacy settings?",
      "answer": "You can manage your privacy settings in your account's privacy section. Choose who can see your posts and profile information."
    },
    {
      "id": 4,
      "category": "General",
      "question": "Is my data shared with third parties?",
      "answer": "We do not share your personal data with third parties without your consent. Please review our privacy policy for details."
    },
    {
      "id": 5,
      "category": "Invoices",
      "question": "How do I upload an invoice?",
      "answer": "To upload an invoice, click on the 'Upload Invoice' button, upload a photo, and click 'Submit' to share it with your Supplier."
    },
    {
      "id": 6,
      "category": "Invoices",
      "question": "Can I edit my invoice after publishing?",
      "answer": "Yes, you can edit your invoices after publishing. Click on the 'Edit' button on your upload to make changes."
    },
    {
      "id": 7,
      "category": "General",
      "question": "How do I report suspicious activity?",
      "answer": "If you come across suspicious activity, click on the 'Report' button to notify our moderation team. We take safety seriously."
    },
    {
      "id": 8,
      "category": "Registration",
      "question": "Can I change my username?",
      "answer": "Usernames cannot be changed once they are set, so choose your username wisely."
    },
    {
      "id": 9,
      "category": "Invoices",
      "question": "Can I schedule invoices for later?",
      "answer": "Yes, you can schedule invoices to be published at a later time or date. Use the scheduling feature when creating a post."
    },
    {
      "id": 10,
      "category": "Registration",
      "question": "How can I change my business Certificate?",
      "answer": "To change your onboarding data, go to your profile settings, and click on the 'Change Business Details' option."
    },
    {
      "id": 11,
      "category": "General",
      "question": "Who can see my private information?",
      "answer": "Private information are only visible to you and the person you are transacting with. They are completely private."
    },
    {
      "id": 12,
      "category": "Registration",
      "question": "How can I recover a forgotten password?",
      "answer": "If you forget your password, use the 'Forgot Password' feature to reset it. You will receive an email with instructions."
    },
    {
      "id": 13,
      "category": "General",
      "question": "How can I unblock or reactivate my account?",
      "answer": "To block or report a user, visit their profile, and use the options available to take action against them."
    },
    {
      "id": 14,
      "category": "Posts",
      "question": "Can I pin posts to the top of my profile?",
      "answer": "Yes, you can pin posts to the top of your profile to feature important content. Use the 'Pin Post' option."
    },
    {
      "id": 15,
      "category": "General",
      "question": "Can I have multiple accounts?",
      "answer": "We have algorithms in place to detect and remove multiple accounts. Report any suspicious accounts to help us maintain a safe environment."
    },
    {
      "id": 16,
      "category": "General",
      "question": "Can I make my business information private?",
      "answer": "Yes, you can make your busines info private, limiting who can see your transaction details. Adjust your privacy settings."
    },
    {
      "id": 17,
      "category": "General",
      "question": "Is there a mobile app available?",
      "answer": "Yes, we offer a mobile app for both Android and iOS devices. Download it from your app store."
    },

  ]
}
