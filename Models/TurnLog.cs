using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace frontend.Models
{
    public class TurnLog
    {
        [Required]
        public int Generation { get; set; }
        [Required]
        public int OceanTileCounter { get; set; }
        [Required]
        public List<OccupiedTile> OccupiedTiles { get; set; } = new List<OccupiedTile>();
        [Required]
        public int OxygenLevel { get; set; }
        [Required]
        public Dictionary<int, PlayerLog> PlayerInfo { get; set; } = new Dictionary<int, PlayerLog>();
        [Required]
        public int TemperatureLevel { get; set; }
    }
}