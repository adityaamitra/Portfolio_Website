module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message, tool } = req.body;

  if (!message || !tool) {
    return res.status(400).json({ error: "Missing message or tool" });
  }

  const systemPrompts = {
    webpath:
      "You are WebPath, an expert web development guide built by Aditya Mitra. Help users navigate full-stack development including React, Node.js, HTML/CSS, databases, and deployment strategies. Be concise, practical, and encouraging. Keep responses to 3-4 sentences max.",
    devpath:
      "You are DevPath AI, an expert DevOps mentor built by Aditya Mitra. Help users master CI/CD pipelines, Docker, Kubernetes, AWS infrastructure, monitoring, and production deployments. Be practical, share real-world insights, and keep responses to 3-4 sentences max.",
    techpath:
      "You are TechPath, a tech career navigator built by Aditya Mitra. Help users plan their software engineering career, prepare for technical interviews, identify skill gaps, and navigate the job market for SWE, DevOps, and AI Engineer roles. Be actionable and keep responses to 3-4 sentences max.",
    pypath:
      "You are PyPath, a Python learning companion built by Aditya Mitra. Help users learn Python from basics to advanced topics — data structures, OOP, data science with pandas/numpy, automation, and ML pipelines. Provide short code snippets when helpful, keep responses to 3-4 sentences max.",
  };

  const systemPrompt = systemPrompts[tool];
  if (!systemPrompt) {
    return res.status(400).json({ error: "Unknown tool" });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "API key not configured" });
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant", // free, very fast
        max_tokens: 300,
        temperature: 0.7,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      console.error("Groq API error:", JSON.stringify(err));
      return res.status(502).json({ error: "Upstream API error" });
    }

    const data = await response.json();
    const reply =
      data.choices?.[0]?.message?.content ??
      "Sorry, I couldn't generate a response.";

    return res.status(200).json({ reply });
  } catch (err) {
    console.error("Handler error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};