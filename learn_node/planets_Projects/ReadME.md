
# 🌍 Habitable Exoplanets Filter (Kepler Data with Node.js)

## 🚀 Overview

This project is a **Node.js-powered tool** that filters and identifies potentially **habitable exoplanets** from NASA’s Kepler mission dataset. Using real scientific criteria, it narrows down thousands of planetary observations to just the ones that could sustain life as we know it.


## 🔍 What It Does

- Reads planetary data from a CSV file (`kepler_data.csv`)
- Parses each row into a JavaScript object using the `csv-parse` library
- Filters planets based on scientifically relevant habitability criteria
- Logs the names of confirmed habitable planets and their count


## ✅ Habitability Criteria

Each planet must meet the following conditions:

| Criteria                          | Description                                                       |
|----------------------------------|-------------------------------------------------------------------|
| `koi_disposition === 'CONFIRMED'` | Only includes planets confirmed by NASA                          |
| `koi_insol` between `0.36` and `1.11` | Receives sunlight similar to Earth                            |
| `koi_prad < 1.6`                 | Less than 1.6 Earth radii, suggesting a rocky, Earth-like planet |


## 📁 Project Structure

```

.
├── index.js            # Main script for data parsing and filtering
├── kepler\_data.csv     # Raw dataset from NASA
├── package.json        # Project metadata and dependencies

````

---

## 🛠 How to Run

1. **Install dependencies:**
   ```bash
   npm install csv-parse
````

2. **Run the project:**

   ```bash
   node index.js
   ```

3. **Example Output:**

   ```
   [ 'Kepler-186f', 'Kepler-442b', 'Kepler-62f' ]
   3 habitable planets found!
   ```

---

## 🧠 What You'll Learn

* How to **stream and parse CSV files** using Node.js
* How to use **pipe and event-based data processing**
* How to apply **filtering logic** to large scientific datasets
* The basics of **planetary science and habitability conditions**

---

## 🤔 FAQs

| Question                       | Answer                                                            |
| ------------------------------ | ----------------------------------------------------------------- |
| Where does the data come from? | NASA’s public Kepler mission data                                 |
| Do I need an API key?          | No, the data is processed locally from a CSV file                 |
| Can I add more filters?        | Yes, just modify the `isHabitablePlanet()` function in `index.js` |
| Is this production-ready?      | It's a prototype meant for learning and demonstrations            |
| How large is the dataset?      | Thousands of entries, streamed efficiently using Node.js          |

---

## 🌌 Why This Project?

NASA's Kepler mission has changed how we view the universe. With this project, you get to explore real space data in a hands-on, meaningful way — using nothing more than JavaScript and a CSV file. Whether you're curious about exoplanets or want to build data-processing skills, this is a rewarding place to start.
