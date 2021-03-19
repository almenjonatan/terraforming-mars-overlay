using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace frontend.Models
{
    public class PlayerMetaData
    {
        [Required]
        public List<string> AvailableCorps { get; set; }
        [Required]
        public string Color { get; set; }
        [Required]
        public string Corporation { get; set; }
        [Required]
        public bool IsLocalPlayer { get; set; }
        [Required]
        public string LocalPlayerId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public double Elo { get; set; }
        [Required]
        public int Karma { get; set; }
        [Required]
        public string WebId { get; set; }
        [Required]
        public string AvatarURI { get; set; }
    }
}