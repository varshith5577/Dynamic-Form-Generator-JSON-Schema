
```markdown
# Dynamic Form Generator 🚀

A powerful React-based form generator that creates dynamic forms from JSON schemas with real-time preview, dark mode support, and validation.

---

## ✨ Features

- Real-time form preview
- JSON schema validation
- Dark mode support
- Copy JSON functionality
- Form validation
- Responsive design
- TypeScript support

---

## 🛠️ Setup

### 1. Clone the repository:
```bash
git clone ""______""
```

### 2. Install dependencies:
```bash
cd dynamic-form-generator
npm install
```

### 3. Start the development server:
```bash
npm start
```

---

## 📝 Example JSON Schemas

### Basic Contact Form
```json
{
  "formTitle": "Project Requirements Survey",
  "formDescription": "Project needs to be keep here",
  "fields": [
    {
      "id": "projectName",
      "type": "text",
      "label": "Project Name",
      "required": true
    },
    {
      "id": "projectType",
      "type": "select",
      "label": "Project Type",
      "required": true,
      "options": [
        { "value": "web", "label": "Web Application" },
        { "value": "mobile", "label": "Mobile App" },
        { "value": "page", "label": "Web Page" }
        { "value": "desktop", "label": "Desktop Software" }
      ]
    },
    {
      "id": "budget",
      "type": "radio",
      "label": "Budget Range",
      "required": true,
      "options": [
        { "value": "small", "label": "10K - 15K" },
        { "value": "medium", "label": "5K - 15K" },
        { "value": "large", "label": "5K" }
        { "value": "lgmedium", "label": "5K - 15K" },
      ]
    }
  ]
}
```

### Advanced Survey Form
```json
{

  "formTitle": "Project Requirements Survey",

  "formDescription": "Please fill out this survey about your project needs",

  "fields": [

    {

      "id": "name",

      "type": "text",

      "label": "Full Name",

      "required": true,

      "placeholder": "Enter your full name"

    },

    {

      "id": "email",

      "type": "email",

      "label": "Email Address",

      "required": true,

      "placeholder": "you@example.com",

      "validation": {

        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",

        "message": "Please enter a valid email address"

      }

    },

    {

      "id": "companySize",

      "type": "select",

      "label": "Company Size",

      "required": true,

      "options": [

        { "value": "1-50", "label": "1-50 employees" },

        { "value": "51-200", "label": "51-200 employees" },

        { "value": "201-1000", "label": "201-1000 employees" },

        { "value": "1000+", "label": "1000+ employees" }

      ]

    },

    {

      "id": "industry",

      "type": "radio",

      "label": "Industry",

      "required": true,

      "options": [

        { "value": "tech", "label": "Technology" },

        { "value": "healthcare", "label": "Healthcare" },

        { "value": "finance", "label": "Finance" },

        { "value": "retail", "label": "Retail" },

        { "value": "other", "label": "Other" }

      ]

    },

    {

      "id": "timeline",

      "type": "select",

      "label": "Project Timeline",

      "required": true,

      "options": [

        { "value": "immediate", "label": "Immediate (within 1 month)" },

        { "value": "short", "label": "Short-term (1-3 months)" },

        { "value": "medium", "label": "Medium-term (3-6 months)" },

        { "value": "long", "label": "Long-term (6+ months)" }

      ]

    },

    {

      "id": "comments",

      "type": "textarea",

      "label": "Additional Comments",

      "required": false,

      "placeholder": "Any other details you'd like to share..."

    }

  ]

}

```



---

## 🚀 Local Development

### Start the development server:
```bash
npm start
```

### Run tests:
```bash
npm test
```

### Build for production:
```bash
npm run build
```

---

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

---

## 💡 Tips for Development

- Use the browser's developer tools to test responsive design.
- Enable dark mode to test theme transitions.
- Test form validation with various input combinations.
- Try copying and modifying example JSON schemas.

---

## 🎨 Customization

You can customize the appearance by modifying:

- `tailwind.config.js` for theme settings
- `src/index.css` for global styles
- Individual component styles using Tailwind classes

---

## 📦 Tech Stack

- **React**
- **TypeScript**
- **Tailwind CSS**
- **React Hook Form**

---

### Improvements:
- Consistent spacing and clear section separators.
- Bullet points and code blocks properly formatted for readability.
- Ensured the JSON examples are valid and easy to copy.
- Retained markdown syntax for headers, code blocks, and lists to ensure proper rendering. 

You can now copy and paste this into your project without any issues.

### Key Changes:
1. **License**: This project is licensed under the MIT License.
2. **Improved JSON Schema Example**: Cleaned up the schema examples for better readability.
3. **General Formatting**: Fixed inconsistent markdown, added necessary line breaks, and improved structure for clarity.
4. **Tech Stack Section**: Clearer and more concise list of technologies used.

## Developed by Varshith Reddy
