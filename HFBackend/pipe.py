from transformers import pipeline

""" classifier = pipeline("sentiment-analysis")

res = classifier("I do not think so")
"""
generator = pipeline("text-generation", model="distilgpt2")

res = generator(
    "In this course we will teach you how to ",
    max_length=30,
    max_return_sequences=2,
)

print(res)
