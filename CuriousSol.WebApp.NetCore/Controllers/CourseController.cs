using CuriousSol.ClassLib.NetFramework;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CuriousSol.WebApp.NetCore.Controllers
{
	[ApiController]
	[Route("coursesCntrl")]
	public class CourseController : ControllerBase
	{
		[HttpGet("getCourses")]
		public IEnumerable<Course> Get()
		{
			Course[] cList = new Course[] {
				new Course
			{
				id = "1",

				name = "C#"
			},
			new Course
			{
				id = "2",
				name = "JS"
			},
			new Course
			{
				id = "3",
				name = "TS"
			}

			};

			return cList;

		}
	}
}
