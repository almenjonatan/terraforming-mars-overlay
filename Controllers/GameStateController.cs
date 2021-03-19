using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.SignalR;
using frontend.Hubs;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Text.Json;
using System;
using System.Linq;
using System.IO;
using frontend.Models;

namespace frontend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GameStateController : ControllerBase
    {
        private ILogger<GameStateController> _logger;
        private IHubContext<GameStateHub> _hubContext;
        public GameStateController(
            ILogger<GameStateController> logger, 
            IHubContext<GameStateHub> hubContext)
        {
            _hubContext = hubContext;
            _logger = logger;
        }

        [HttpPost("turn/{playerId}", Name = "UpdateTurn")]
        public Task UpdateTurn(string playerId, [FromBody] TurnLog turnLog)
        {
            _logger.LogInformation("Turnlog");

            return _hubContext
                .Clients
                .Group(playerId)
                .SendAsync("newturn", turnLog);
        }

        [HttpPost("metadata/{playerId}", Name = "UpdatePlayerMetadata")]
        public Task UpdatePLayerMetaData(string playerId, [FromBody] Dictionary<string, PlayerMetaData> playerMetaData)
        {
            _logger.LogInformation("MetaData");

            return _hubContext
                .Clients
                .Group(playerId)
                .SendAsync("metadata", playerMetaData);
        }
    }
}
