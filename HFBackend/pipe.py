from transformers import pipeline

""" classifier = pipeline("sentiment-analysis")

res = classifier("I do not think so")
 """
generator = pipeline("text-generation", model="distilgpt2")

res = generator(
    "Hi How are you?",
    max_length=30,
    num_return_sequences=2,
)

print(res)
