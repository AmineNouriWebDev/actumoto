import re

with open('modeles.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the start of showModels
start_idx = content.find('function showModels(brand) {')

# Find modelsData[brand].reverse().forEach((model, index) => {
foreach_start = content.find('modelsData[brand].reverse().forEach((model, index) => {', start_idx)

# Find the end of the forEach loop
# We know it ends around line 1492 with `});` before `// Afficher les contacts de la marque`
# Let's search for `// Afficher les contacts`
contacts_start = content.find('// Afficher les contacts de la marque en bas de la page', foreach_start)
foreach_end = content.rfind('});', foreach_start, contacts_start)

# The body of the forEach is between foreach_start and foreach_end
foreach_block = content[foreach_start:foreach_end + 3]

# Extract the inside of the forEach
# starts after `modelsData[brand].reverse().forEach((model, index) => {`
inside_start = foreach_block.find('{') + 1
inside_end = foreach_block.rfind('}')
inside_content = foreach_block[inside_start:inside_end]

# We will create a new function createModelCard(model, brand, index, container)
new_function = f"""
      function createModelCard(model, brand, index, container) {{
{inside_content}
      }}
"""

# Now replace the foreach_block in showModels with a call to the new function
new_foreach_block = """
          modelsData[brand].reverse().forEach((model, index) => {
            createModelCard(model, brand, index, container);
          });
"""

content = content[:foreach_start] + new_foreach_block + content[foreach_end+3:]

# Now we need to add showModelsByCategory right after showModels
show_models_end = content.find('function updateMetaTags(brand) {')

show_models_by_category = """
      function showModelsByCategory(category) {
        const title = document.getElementById("selected-brand");
        const count = document.getElementById("models-count");
        const container = document.getElementById("models-container");

        title.textContent = `CATÉGORIE: ${category.toUpperCase()}`;
        container.innerHTML = "";

        let matchingCount = 0;

        if (typeof modelsData !== 'undefined') {
          Object.keys(modelsData).forEach(brand => {
            modelsData[brand].reverse().forEach((model, index) => {
              if (model.category && model.category.toLowerCase() === category.toLowerCase()) {
                createModelCard(model, brand, index, container);
                matchingCount++;
              }
            });
          });
        }

        count.textContent = `${matchingCount} modèle(s) disponible(s)`;
        
        // Hide brand contacts if any (they are specific to brands)
        const contactsContainer = document.getElementById("brand-contacts-container");
        if (contactsContainer) {
            contactsContainer.innerHTML = "";
        }

        setTimeout(updateCompareButtons, 0);
      }
"""

content = content[:show_models_end] + new_function + show_models_by_category + content[show_models_end:]

# Update initPage
init_page_old = """
        if (brandParam && modelsData[brandParam]) {
          showModels(brandParam);
          updateMetaTags(brandParam);
        } else {
          window.location.href = "index.html";
        }
"""

init_page_new = """
        const categoryParam = urlParams.get("category");

        if (brandParam && modelsData[brandParam]) {
          showModels(brandParam);
          updateMetaTags(brandParam);
        } else if (categoryParam) {
          showModelsByCategory(categoryParam);
          // Optional: updateMetaTagsByCategory if needed, for now just use default
        } else {
          window.location.href = "index.html";
        }
"""

content = content.replace(init_page_old, init_page_new)

with open('modeles.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Refactoring complete.")
