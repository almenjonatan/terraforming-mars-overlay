using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace frontend.Hubs
{
    public class GameStateHub : Hub
    {
        public async Task Register(int webId)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, webId.ToString());
        }

        public async Task Unregister(int webId)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, webId.ToString());
        }
    }
}
