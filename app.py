import csv
import json

csvfile = "StudentsPerformance.csv"
json_file_path = 'db.json'

data = []
with open(csvfile, mode='r', encoding='utf-8') as csvfile:
    csv_reader = csv.DictReader(csvfile)
    for row in csv_reader:
        data.append(row)

# Write the JSON data to db.json
with open(json_file_path, mode='w', encoding='utf-8') as jsonfile:
    json.dump(data, jsonfile, indent=4)

print("CSV data has been written to db.json")