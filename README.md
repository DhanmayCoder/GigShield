# GigShield — AI-Powered Parametric Insurance for Food Delivery Workers

## Problem Statement

India's food delivery partners (Swiggy, Zomato) are the backbone of modern urban economies, yet they remain completely exposed to financial loss caused by external disruptions beyond their control. Extreme rainfall, dangerous heat, severe air pollution, heavy traffic, and sudden strikes or curfews can force a delivery worker off the road for hours or entire days, cutting their weekly income by 20–30% with no safety net in place.

**GigShield** is an AI-enabled parametric insurance platform that automatically detects these disruptions through real-time data, calculates a live risk score for each worker's zone, and triggers instant payouts — no claim forms, no waiting, no guesswork.

---

## Persona

### Target User
Food delivery partners working on Swiggy and Zomato platforms in Indian tier-1 cities.

### Why this persona?
Food delivery workers face the most direct, day-to-day income impact from weather and environmental disruptions. Unlike e-commerce or grocery delivery, their volume of orders is heavily concentrated in specific time windows, meaning even a few disrupted hours translates to significant weekly income loss.

### Persona Scenario Example
**Raju** is a Zomato delivery partner in Mumbai. On a Tuesday afternoon, rainfall crosses 35mm and the AQI spikes above 250. His risk score hits 84. GigShield automatically detects this in his registered zone, triggers a payout under his Gold plan, and credits his account within 24–36 hours — without Raju having to do anything.

---

## Insurance Plans & Weekly Pricing

All plans are structured on a **weekly pricing model** to align with the typical earnings and payout cycle of a gig worker.

| Plan   | Weekly Price | Disruptions Covered                                    |
|--------|--------------|-------------------------------------------------------|
| Bronze | ₹59          | Rainfall + Temperature                                 |
| Silver | ₹89          | Rainfall + Temperature + Pollution + Strike/Curfew     |
| Gold   | ₹118         | Rainfall + Temperature + Pollution + Traffic + Strike/Curfew |

- **Bronze** covers only the two most common income-disruptors for delivery workers and is designed for affordability.
- **Silver** adds pollution and strike/curfew coverage, protecting workers against a wider set of urban disruptions.
- **Gold** provides the most comprehensive protection by additionally covering traffic disruptions, which can make delivery work economically unviable even on otherwise clear days.

---

## Financial Model

Based on expected subscription volume and the statistical reality that not all users will claim a payout in any given week, the platform is projected to generate an annual profit of approximately **₹20,00,000**. 

Additional revenue streams include:
- In-app advertising
- Corporate mass subscription deals with delivery platform companies (at a discounted rate per worker)
- Smart Saving Wallet feature
- Referral bonuses

---

## Risk Score System

Every worker's payout eligibility is determined by a **live Risk Score (0–100)**, calculated in real time by the AI engine based on current conditions in their registered zone.

| Score Range | Payout Level   |
|-------------|----------------|
| 0 – 40      | No payout      |
| 40 – 60     | Small payout   |
| 60 – 80     | Medium payout  |
| 80 – 100    | Full payout    |

---

## Parameter Score Tables

Each environmental parameter is independently converted into a score before being fed into the plan formula.

### Rainfall

| Rainfall        | Score |
|-----------------|-------|
| 0 mm            | 0     |
| 0 – 5 mm        | 20    |
| 5 – 15 mm       | 40    |
| 15 – 30 mm      | 70    |
| Above 30 mm     | 100   |

### Temperature

| Temperature     | Score |
|-----------------|-------|
| Below 30°C      | 10    |
| 30°C – 35°C     | 30    |
| 35°C – 40°C     | 50    |
| 40°C – 45°C     | 75    |
| Above 45°C      | 100   |

### Air Quality Index (AQI)

| AQI            | Score |
|----------------|-------|
| 0 – 50         | 10    |
| 50 – 100       | 30    |
| 100 – 200      | 50    |
| 200 – 300      | 75    |
| 300+           | 100   |

### Traffic Congestion

| Traffic Level  | Score |
|----------------|-------|
| 0 – 20%        | 10    |
| 20 – 40%       | 30    |
| 40 – 60%       | 50    |
| 60 – 80%       | 75    |
| 80 – 100%      | 100   |

### Strike / Curfew

| Condition       | Score |
|-----------------|-------|
| No strike       | 0     |
| Strike active   | 100   |

---

## Plan-Specific Risk Score Formulas

Each plan applies a different weighted formula to the parameter scores, reflecting which disruptions are most relevant for that tier of coverage.

### Gold Plan
RiskScore = (0.30 × RainScore) + (0.20 × TempScore) + (0.20 × PollutionScore) + (0.20 × TrafficScore) + (0.10 × StrikeScore)
### Silver Plan
RiskScore = (0.375 × RainScore) + (0.25 × TempScore) + (0.25 × PollutionScore) + (0.125 × StrikeScore)
### Bronze Plan
RiskScore = (0.60 × RainScore) + (0.40 × TempScore)
### Score Calculation Pipeline:
1. Fetch live data from APIs
2. Convert raw values (mm, °C, AQI, %, binary) → parameter scores
3. Apply the user's plan-specific formula
4. Evaluate final RiskScore against payout threshold
5. Trigger payout or hold

---

## System Flowchart

```mermaid
flowchart TD
    A([User Subscribes to Weekly Plan]) --> B[System Registers User Location & Zone]
    B --> C[AI Engine Collects Live Data]
    C --> D[Weather Data\nRainfall + Temperature]
    C --> E[Pollution Data\nAQI]
    C --> F[Traffic Data\nCongestion %]
    C --> G[Zone Risk Data\nStrike / Curfew]
    D & E & F & G --> H[Convert Raw Values to Parameter Scores]
    H --> I[Apply Plan Formula\nGold / Silver / Bronze]
    I --> J{Score Evaluation}
    J -- Score 0–40 --> K([No Payout])
    J -- Score 40–60 --> L[Small Payout Triggered]
    J -- Score 60–80 --> M[Medium Payout Triggered]
    J -- Score 80–100 --> N[Full Payout Triggered]
    L & M & N --> O[Auto Payout Processed]
    O --> P([Money Credited to Worker in 24–36 hrs])
## Zone System

The city is divided into geographic zones. Each user registers their 3–4 primary working zones at the time of onboarding. The risk score is calculated specifically for those zones.

A worker cannot claim a payout for a disruption in a zone they do not work in. For example, a delivery partner registered to Andheri cannot claim for a rainstorm in Navi Mumbai.

This zone-based model serves two purposes: it keeps payouts accurate and fair, and it acts as a first layer of fraud prevention.

---

## Claim Rules & Eligibility

A user is not eligible for any payout for the first 3 weeks after subscribing. This cooling-off period prevents abuse at onboarding.

Maximum 1 payout per week.

Maximum 3 payouts per month.

Users who do not make any claim for 6 months or 1 year receive a loyalty benefit in the form of a partial premium refund.

---

## Live Dashboard

Every user has access to a live dashboard within the app that displays:

Their current real-time Risk Score for their registered zones

Active weekly plan and coverage status

A Claim button that becomes active when their score crosses the payout threshold

Historical payout records and earnings protected

---

## APIs Used

| API | Purpose |
|-----|---------|
| OpenWeatherMap API (`api.openweathermap.org/data/2.5/weather`) | Rainfall, temperature, weather alerts, forecast |
| WAQI — World Air Quality Index API (`api.waqi.info/feed/{city}`) | Live AQI / pollution data |
| Google Maps API | Location tracking and zone mapping |
| Google Maps Traffic API | Real-time traffic congestion data |
| Razorpay (Test Mode) | Simulated payment gateway for payouts |
| Government Disaster / Alert API | Strike and curfew detection |
| Platform API — Mocked (Swiggy/Zomato) | Worker activity and delivery status cross-reference |

---

## Tech Stack

| Layer       | Technology                    |
|-------------|-------------------------------|
| Frontend    | HTML, CSS, JavaScript         |
| Backend     | Node.js                       |
| AI Engine   | Python (Flask / Django)       |
| Database    | MongoDB                       |
| Mobile App  | Apache Cordova                |

---

## AI Integration

The AI engine is the core of GigShield's automation. It is responsible for:

Live Score Generation: Continuously fetching API data, applying the plan formula, and generating a live risk score on the user's dashboard.

Premium Calculation: Dynamically adjusting weekly premiums based on zone-level historical risk data and predictive modelling.

User & Location Detection: Tracking user zone activity to validate claim eligibility.

Weather & Disruption Tracking: Monitoring real-time and forecast data to anticipate disruption events before they occur.

---

## Fraud Prevention

### PAN Card Verification

All users must complete PAN card verification at onboarding to ensure each account is linked to a unique, real individual. This prevents duplicate account creation for fraudulent claims.

### Adversarial Defense & Anti-Spoofing Strategy

This section addresses the Market Crash scenario: a coordinated fraud ring of 500 delivery partners using GPS spoofing applications to fake their locations, trigger false disruption conditions, and drain the platform's liquidity pool.

#### 1. Proof of Work Cross-Reference

The most reliable way to verify that a worker is genuinely in a disrupted zone is to prove they were actually working there. Simple GPS coordinates alone can be fabricated — but delivery activity cannot be easily faked.

Platform API Integration: The AI engine pings a mock Swiggy/Zomato API to verify whether the worker is currently marked as "Online" and has been moving between delivery coordinates in their registered zone during the claim window. A worker sitting at home with a GPS spoofer will not have active delivery status.

Transaction Validation: The system cross-references the claim against the worker's "Order Delivered" timestamps from the delivery platform. A genuine worker caught in a rainstorm will have recent delivery activity in that zone. A fraudster spoofing that zone will have no such timestamps, and the claim is automatically flagged and rejected.

#### 2. Software-Level Detection (Client Side)

Since the application is built on JavaScript and Apache Cordova, the app can directly inspect the device's settings at the time of claim.

isMockSettingEnabled Check: Most Android devices require the "Mock Location" Developer Option to be turned on in order to spoof GPS. The app checks for this setting at the moment the claim button is pressed. If Mock Location is active, the Claim button is disabled and the attempt is logged.

System Integrity Check: Using Cordova plugins, the app can detect whether the device is rooted or jailbroken, which is typically required for high-level GPS manipulation. A rooted device triggers an automatic fraud alert and escalates the claim for manual review.

#### 3. Network-Based Triangulation (Server Side)

The AI engine does not rely solely on GPS. It collects multiple independent location signals and compares them for consistency.

IP Address Geolocation: At the time of claim, the server compares the worker's reported GPS coordinates against the geographic location of their IP address. If the GPS reports the worker is in Andheri but the IP address resolves to Navi Mumbai, a fraud alert is triggered immediately.

WiFi SSID Mapping: If the app is running and connected to WiFi, it can read the SSIDs of nearby networks. These are compared against the known network signatures of the reported zone. If the surrounding WiFi networks do not match the expected signals for that area, the claim is flagged for review.

#### How the System Differentiates a Genuine Worker from a Bad Actor

| Signal                      | Genuine Stranded Worker | GPS Fraudster          |
|-----------------------------|-------------------------|------------------------|
| Platform Online Status      | Active in zone          | Offline or inactive    |
| Order Delivered Timestamps  | Present in claimed zone | Absent                 |
| Mock Location Setting       | Disabled                | Enabled                |
| Device Rooted               | No                      | Likely yes             |
| IP vs GPS Match             | Consistent              | Inconsistent           |
| WiFi SSID Match             | Consistent with zone    | Inconsistent           |

A claim must pass a majority of these checks to be approved. A single failed check raises a review flag. Multiple failed checks result in automatic rejection and account suspension pending investigation.

---

## Additional Features

Referral Bonus: Users who refer new delivery partners to the platform receive a bonus credited to their Smart Saving Wallet.

Corporate Mass Subscriptions: Delivery platform companies (Swiggy, Zomato) can enrol their entire fleet under a bulk subscription deal at a discounted per-worker rate. This drives large-scale onboarding while reducing per-user acquisition costs.

In-App Advertising: A non-intrusive advertising channel within the app generates supplementary platform revenue.

Smart Saving Wallet: An in-app wallet where users can save a portion of their earnings or payout credits. The platform can deploy this pooled capital in short-term instruments, and users earn interest on their wallet balance — giving workers an additional financial tool beyond just insurance.

Loyalty Bonus: Workers who maintain an active subscription and make no claims for 6 months or 1 year receive a partial premium refund as a reward for sustained engagement and low-risk behaviour.
