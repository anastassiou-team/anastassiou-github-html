# How to Update Publications on Your Lab Website

## **Quick Update Method:**

### **1. Open `script.js`**
Find the `publications` array (around line 10-60)

### **2. Add New Publication:**
Add a new publication object at the beginning of the array:

```javascript
{
    year: 2025,
    title: "Your New Paper Title",
    authors: "Author, A., Anastassiou, C., et al.",
    journal: "Journal Name",
    doi: "10.1000/doi123",
    link: "https://doi.org/10.1000/doi123"
},
```

### **3. Save and Refresh:**
- Save the file
- Refresh your website
- New publication appears automatically!

## **Publication Object Structure:**

| Field | Description | Example |
|-------|-------------|---------|
| `year` | Publication year | `2025` |
| `title` | Paper title | `"Your Paper Title"` |
| `authors` | Author list | `"Author, A., Anastassiou, C., et al."` |
| `journal` | Journal name | `"Nature Neuroscience"` |
| `doi` | DOI identifier | `"10.1000/doi123"` |
| `link` | Full paper URL | `"https://doi.org/10.1000/doi123"` |

## **Example Update:**

**Before:**
```javascript
const publications = [
    {
        year: 2024,
        title: "Cell type-specific effects...",
        // ... rest of publication
    },
    // ... other publications
];
```

**After adding new paper:**
```javascript
const publications = [
    {
        year: 2025,
        title: "Your New Paper Title",
        authors: "Author, A., Anastassiou, C., et al.",
        journal: "Journal Name",
        doi: "10.1000/doi123",
        link: "https://doi.org/10.1000/doi123",
        impact: "High Impact"
    },
    {
        year: 2024,
        title: "Cell type-specific effects...",
        // ... rest of publication
    },
    // ... other publications
];
```

## **Tips:**
- **Always add new publications at the top** (beginning of array)
- **Copy the exact format** from existing publications
- **Include all fields** for consistency
- **Test by refreshing** your website after changes

## **Need Help?**
If you get stuck, just copy an existing publication object and modify the fields!

---
*Last updated: January 2025*
