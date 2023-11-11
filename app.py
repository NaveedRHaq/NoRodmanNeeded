import csv
import json

# Replace 'your_file.csv' with your CSV file name
csv_file_path = 'StudentsPerformance.csv'
json_file_path = './data/db1.json'

# Function to convert values to integers where applicable
def convert_to_int(row):
    new_row = {}
    for key, value in row.items():
        if key != 'STUDENT ID':
            try:
                new_row[key] = int(value)
            except ValueError:
                new_row[key] = value
        else:
            new_row[key] = value
    return new_row

# Read the CSV file and convert to JSON
data = []
with open(csv_file_path, mode='r', encoding='utf-8') as csvfile:
    csv_reader = csv.DictReader(csvfile)
    for row in csv_reader:
        data.append(convert_to_int(row))

# Write the JSON data to db.json
with open(json_file_path, mode='w', encoding='utf-8') as jsonfile:
    json.dump(data, jsonfile, indent=4)

print("CSV data has been written to db.json")
