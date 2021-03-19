using System.ComponentModel.DataAnnotations;

namespace frontend.Models
{
    public class OccupiedTile
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Type { get; set; }
        [Required]
        public string Owner { get; set; }
        [Required]
        public string OwnerColor { get; set; }
    }
}