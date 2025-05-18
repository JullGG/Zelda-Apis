const { format } = require('prettier');

function beautyjs(code) {
  try {
    
    let normalized = code
      .replace(/\s+/g, ' ') 
      .replace(/\/\*[\s\S]*?\*\//g, '') // Hapus block comments
      .replace(/\/\/.*$/gm, '') 
      .trim();
    
    
    const formatted = format(normalized, {
      parser: 'babel',
      semi: true,
      singleQuote: true,
      trailingComma: 'none',
      printWidth: 80,
      tabWidth: 2,
      bracketSpacing: true,
      arrowParens: 'avoid'
    });
    
    return formatted;
  } catch (error) {
    console.error('Formatting error, returning normalized code:', error.message);
    return normalized;
  }
}

module.exports = beautyjs;
