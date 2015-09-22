var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function() {
  return {

	addcustomer: function(req, res)
	{
		// console.log('This is the entire req object', req.body);
		
		// console.log(req.body.name);
		Customer.findOne({name: req.body.name}, function(err, results) 
		{
			// console.log(results);

			if (results)
			{
				res.json({err: "Name Exists!"})
			} 
			else 
			{
				var customer = new Customer(req.body);
				customer.save(function(err, result){
					if (err)
					{
						// console.log('err', err);
						res.json({error: "Something went wrong"});	
					}
					else
					{
						res.json(result);
						//DON'T FORGET THIS LINE
					}
				})			
				
			}
		})
	},
	get_customers: function(req, res)
	{

		Customer.find({}, function(err, results)
		{
			if(err){
				console.log(err);

			}else{
				// console.log(results);
				res.json(results);
				//INPORTANT
			}
		})
	},
	delete_customer: function(req, res)
	{
		console.log('HEY! REALLY WANT TO DELETE?: ', req.body._id);
		Customer.remove({_id: req.body._id}, function(err, results)
		{
			if(err){
				console.log(err);
			}else{
				// console.log(results);
				res.json(results);
				//INPORTANT
			}
		})

	}

  }
})();