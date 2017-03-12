using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using ngcommerce.Web;
[assembly: OwinStartupAttribute(typeof(ngrealestate.Startup))]

namespace ngrealestate
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=316888
            ngcommerce.Web.Startup.Register(app);
        }
    }
}
