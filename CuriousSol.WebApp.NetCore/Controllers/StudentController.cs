using CuriousSol.ClassLib.NetStandard;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CuriousSol.WebApp.NetCore.Controllers
{
	[ApiController]
	[Route("studentCntrl")]
	public class StudentController : ControllerBase
	{
		private static readonly string[] names = new[]
		{
			"Jack", "Sam", "Chilly"
		};

		private readonly ILogger<StudentController> _logger;

		public StudentController(ILogger<StudentController> logger)
		{
			_logger = logger;
		}

		[HttpGet("getStudents")]
		public IEnumerable<Student> Get()
		{
			var rng = new Random();
			return Enumerable.Range(1, 5).Select(index => new Student
			{
				id = index.ToString(),
				name = "dasasd",
				city = "Brampton"
			})
			.ToArray();
		}
	}
}
