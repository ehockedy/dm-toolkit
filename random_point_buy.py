import random

points = {
  0: 8,
  1: 9,
  2: 10,
  3: 11,
  4: 12,
  5: 13,
  7: 14,
  9: 15
}

stats = []
target_stats_num = 6
to_spend = 27
spent = 0

while len(stats) < target_stats_num:
    avg = to_spend / (target_stats_num - len(stats))  # The next cost must be above this
    cost = random.choice(list(points.keys()))
    if cost <= to_spend and cost >= avg:
        stats.append(points[cost])
        to_spend -= cost
        spent += cost

print(sorted(stats, reverse=True), spent)
