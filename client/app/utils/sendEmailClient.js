const sendEmailClient = async (to, subject, text, html) => {
  try {
    const response = await fetch ('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ to, subject, text, html })
    });

    const data = await response.json();

    if(!response.ok) {
      throw new Error(data.error || 'Something went wrong')
    }
  } catch (error) {
    console.error('Erorring sending email: ', error);
    throw error
  }
}

export default sendEmailClient