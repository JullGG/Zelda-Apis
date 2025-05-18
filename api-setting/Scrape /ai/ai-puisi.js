const axios = require('axios');

async function generatePoem(text) {
  // Validate input
  if (typeof text !== 'string' || text.trim() === '') {
    return {
      success: false,
      message: "Please provide valid text input"
    };
  }

  try {
    const url = "https://poem-generator.io/generator/poem";
    
    const headers = {
      'Accept': '*/*',
      'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
      'Connection': 'keep-alive',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Cookie': 'XSRF-TOKEN=eyJpdiI6IjI4UDZSUy91dmx3eTVieFpDTnRtdGc9PSIsInZhbHVlIjoic01pdWlpc2JpWklEeTRxS1Z3VkRhMGp1czF0QVhIamJkM25aMSszYW4yT3RkY1JZQWFZVEpPS2ZveDVuZGZXd09HVjlNN3dGYjBNSENKSTNYRUVLZ3YvSHZ6eUxZVmFUSXdXWlZBd1hnM0ZlL1hNejFDKy93WlIyLzAxdnRvVEEiLCJtYWMiOiIzNmU0YThjODVhMWFiYjhiNjkyMjYwMzhhMmQ0ZjAxM2E4MzIwMWJjNTJkYjUyOWVmZTE5NjY5NjU3MTk3ZjMwIiwidGFnIjoiIn0%3D; laravel_9_session=eyJpdiI6ImpOUGd4TUNJT3F5bW5LM3lmaXR5UVE9PSIsInZhbHVlIjoiUmE0R2szaThkUWtSTGEvSWEvU2NZUXlEVkJwMTlIRXdDYUxjUmh1NWZ1UERtYlRURCt5dUdHMHNBSmJ4azkrb0pBV0FBaU9jQ3pDNGNwZk0xNUlERlc1WFRtRy8xSUNKcFFIMG5LR0lQLzRtV0RrdXd5QWZNeHZJZUdYcFpWLzkiLCJtYWMiOiI4NjQ2ODk2Njg2OThjMmFmNzFjN2U3ZDM0NTE4MWU1NDQ3MTNkYmJmYjQ3MWYyYzdlMTQ3YWJiYzMyZTE3ZDZmIiwidGFnIjoiIn0%3D; _ga_HLZFQCCE03=GS2.1.s1747119172$o1$g0$t1747119172$j0$l0$h0; _ga=GA1.1.1669157685.1747119173; __gads=ID=e9c39a8ad5d881f0:T=1747119172:RT=1747119172:S=ALNI_MbXrTxDHPTbH6VKHV5bCleFAJToQg; __gpi=UID=000010bf80a7bf47:T=1747119172:RT=1747119172:S=ALNI_MadxQREP7yiiWSGSQ5WgPkdYMEFQg; __eoi=ID=c6f642e1d422423a:T=1747119172:RT=1747119172:S=AA-AfjbnTk1xBePQv6Taxs3AH18b',
      'Origin': 'https://poem-generator.io',
      'Referer': 'https://poem-generator.io/id/pembuat-puisi',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
      'X-CSRF-TOKEN': 'odZofmDmM2CDRpuBFA8nxUisUywNirhVoTJROlYJ',
      'X-Requested-With': 'XMLHttpRequest',
      'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"'
    };

    const params = new URLSearchParams();
    params.append('mode', 'Ramdon Type');
    params.append('describe', text); // Using user's random input
    params.append('length', 'Short');

    const response = await axios.post(url, params.toString(), { headers });
    
    return {
      success: true,
      poem: response.data
    };
    
  } catch (error) {
    console.error('Error generating poem:', error.message);
    return {
      success: false,
      message: "Failed to generate poem",
      error: error.message
    };
  }
}

module.exports = generatePoem;
