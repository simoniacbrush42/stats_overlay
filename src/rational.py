

class rational:
	def __init__(self, num, denom):
		self.num = float(num)
		self.denom = float(denom)
		self.reduce()

	def reduce(self):
		div = math.gcd(self.num, self.denom)
		self.num = self.num/div
		self.denom = self.denom/div
		print(self.num, self.denom)



x = rational(2,4)